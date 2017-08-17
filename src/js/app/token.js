import strings from './strings';
import tokenConfig from './config/token';
import environment from './config/environment';
import ABI from './abi';
import SupError from './error';
import uiControl from './ui';
import uiIdentity from './config/ui';

const Web3 = require('web3');
const $ = require('jquery');

/**
 * This is the main promissory token class
 */
export default class {
  /**
   * This is the class constructor
   * @constructor
   */
  constructor() {
    this.ethAccount = uiIdentity.eth_account;
    this.claimBtn = uiIdentity.claim_button;
    this.gasPriceInput = uiIdentity.gas_price_input;
    this.claimEtherInput = uiIdentity.claim_eth_input;
    this.loggingElement = uiIdentity.logging_element;
    this.apiaddress = 'https://api.etherscan.io/api'; // RPC API access
    // this.apiaddress = "https://ropsten.etherscan.io/api",//ropsten api
    if (!environment.debug) {
      this.address = tokenConfig.main_token_address;
    } else {
      this.address = tokenConfig.test_token_address;
    }
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = window.web3;
      this.injected = true;
    } else {
      console.log(strings.err_no_web3);
      alert(strings.err_no_metamask);
      // fallback - use your fallback strategy
      this.web3 = new Web3(new Web3.providers.HttpProvider(
        environment.debug ? tokenConfig.test_http_endpoint
          : tokenConfig.main_http_endpoint,
      ));
      this.injected = false;
    }
    this.checkNetwork();
    this.makeContractInst();
  }

  makeContractInst() {
    try {
      this.accounts_count = this.web3.eth.accounts.length;
      this.tokenInstance = this.web3.eth.contract(ABI).at(this.address);
    } catch (e) {
      console.log(e);
      // disable_button();
      alert(strings.err_no_token_instance);
    }
  }

  checkNetwork() {
    const netId = this.web3.version.network;
    switch (netId) {
      case '1':
        console.log(strings.inf_msg_mainet);
        break;
      case '2':
        console.log(
          strings.inf_msg_morden);
        break;
      case '3':
        console.log(strings.inf_msg_ropsten);
        break;
      default:
        console.log(strings.inf_msg_net_unk);
    }
    if (netId !== '1' && !environment.debug) {
      // disable_button();
      throw SupError(strings.err_no_main_net_claim);
    }
  }

  static roundPrecise(number, precision) {
    const factor = 10 ** precision;
    const tempNumber = number * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

  claim() {
    if (!this.tokenInstance) {
      throw SupError(strings.err_token_inst_not_init);
    }
    let transactionId;
    const gasPrice = $(this.gasPriceInput).val();
    let value = $(this.claimEtherInput).val();
    const tokenCountCheck = this.constructor.roundPrecise(value % strings.token_discount_price, 11);
    if (tokenCountCheck !== strings.token_discount_price) {
      value = this.constructor.roundPrecise(value - tokenCountCheck, 11);
      $(this.claimEtherInput).val(value);
    }
    if (value === 0) {
      // return;
    }
    uiControl.disableElement(this.claimBtn);
    try {
      transactionId = this.tokenInstance.claim({
        from: $(this.ethAccount).val(),
        value: Web3.toWei(value, 'ether'),
        gas: gasPrice,
      }, (error, result) => {
        if (!error) {
          console.log(transactionId);
          value = +$(this.claimEtherInput).val('');
          uiControl.addToLog(`Transaction sent: <a href="https://etherscan.io/tx/',
            ${result},'" target="_blank">', ${result}</a>`);
        } else {
          let errorData = error.toString();
          console.log(errorData);
          if (Object.keys(error)) {
            if (error.indexOf('Error: Error:') > -1) {
              errorData = error.substring(13);
              if (error.length > 58) {
                errorData = `${error.substring(0, 58)}, ...`;
              }
            }
            uiControl.addToLog(`<span style="color:red">, ${error}, </span>`);
          }
        }
        uiControl.refreshValues();
        uiControl.enableElement();
      });
    } catch (e) {
      console.log('Excep:', e);
      uiControl.addToLog(`<span style="color:red">, ${e.message}, </span>`);
      uiControl.enableElement();
    }
  }
  fetchContractData() {
    const calls = {
      claimedUnits: 'claimedUnits()',
      claimedPrepaidUnits: 'claimedPrepaidUnits()',
    };
    let claimedPrepaidUnits = 0;
    let claimedUnits = 0;
    return $.post(this.apiaddress, {
      action: 'eth_call',
      apikey: tokenConfig.apikey,
      module: 'proxy',
      to: tokenConfig.main_token_address,
      data: this.constructor.getFunctionSignature(calls.claimedPrepaidUnits),
    })
      .then((d, e) => {
        if (e) {
          console.log(e);
          return;
        }
        claimedPrepaidUnits = Web3.toDecimal(d.result);
        console.log('claimed prepaid', claimedPrepaidUnits);
      })
      .then(() => {
        $.post(this.apiaddress, {
          action: 'eth_call',
          apikey: tokenConfig.apikey,
          module: 'proxy',
          to: tokenConfig.main_token_address,
          data: this.constructor.getFunctionSignature(calls.claimedUnits),
        })
          .then((d, e) => {
            if (e) {
              console.log(e);
              return;
            }
            claimedUnits = Web3.toDecimal(d.result);
            console.log('claimed', claimedUnits);
          });
      });
  }

  static getFunctionSignature(fnx) {
    return Web3.sha3(fnx).substring(0, 10);
  }
}
