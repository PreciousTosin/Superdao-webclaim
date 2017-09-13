export default [{
  constant: true,
  inputs: [],
  name: 'lastPrice',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_newFounderAddr',
    type: 'address',
  }, {
    name: '_oneTimesharedPhrase',
    type: 'bytes32',
  }],
  name: 'cofounderApproveSwitchRequest',
  outputs: [{
    name: 'success',
    type: 'bool',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '_withdrawalID',
    type: 'uint256',
  }],
  name: 'getWithdrawalData',
  outputs: [{
    name: '',
    type: 'uint256',
  }, {
    name: '',
    type: 'bool',
  }, {
    name: '',
    type: 'bytes',
  }, {
    name: '',
    type: 'address[]',
  }, {
    name: '',
    type: 'uint256',
  }, {
    name: '',
    type: 'address[]',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'uint256',
  }],
  name: 'backersAddresses',
  outputs: [{
    name: '',
    type: 'address',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'numOfBackers',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_totalAmount',
    type: 'uint256',
  }, {
    name: '_reason',
    type: 'bytes',
  }, {
    name: '_destination',
    type: 'address[]',
  }],
  name: 'withdraw',
  outputs: [],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_backer',
    type: 'address',
  }, {
    name: '_tokenPrice',
    type: 'uint256',
  }, {
    name: '_tokenAmount',
    type: 'uint256',
  }, {
    name: '_privatePhrase',
    type: 'string',
  }, {
    name: '_backerRank',
    type: 'uint256',
  }],
  name: 'setPrepaid',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '_backerAddress',
    type: 'address',
  }, {
    name: 'index',
    type: 'uint256',
  }],
  name: 'checkBalance',
  outputs: [{
    name: '',
    type: 'uint256',
  }, {
    name: '',
    type: 'uint256',
  }, {
    name: '',
    type: 'bytes32',
  }, {
    name: '',
    type: 'bool',
  }, {
    name: '',
    type: 'bool',
  }],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [],
  name: 'claim',
  outputs: [],
  payable: true,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_founderHash',
    type: 'bytes32',
  }, {
    name: '_oneTimesharedPhrase',
    type: 'bytes32',
  }],
  name: 'founderSwitchRequest',
  outputs: [{
    name: 'success',
    type: 'bool',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'claimedPrepaidUnits',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'promissoryUnits',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'uint256',
  }],
  name: 'withdrawals',
  outputs: [{
    name: 'Amount',
    type: 'uint256',
  }, {
    name: 'approved',
    type: 'bool',
  }, {
    name: 'spent',
    type: 'bool',
  }, {
    name: 'reason',
    type: 'bytes',
  }, {
    name: 'totalStake',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'address',
  }, {
    name: '',
    type: 'uint256',
  }],
  name: 'backers',
  outputs: [{
    name: 'tokenPrice',
    type: 'uint256',
  }, {
    name: 'tokenAmount',
    type: 'uint256',
  }, {
    name: 'privateHash',
    type: 'bytes32',
  }, {
    name: 'prepaid',
    type: 'bool',
  }, {
    name: 'claimed',
    type: 'bool',
  }, {
    name: 'backerRank',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'prepaidUnits',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_amount',
    type: 'uint256',
  }, {
    name: '_backerAddr',
    type: 'address',
  }],
  name: 'redeem',
  outputs: [{
    name: '',
    type: 'bool',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'address',
  }],
  name: 'backersRedeemed',
  outputs: [{
    name: '',
    type: 'bool',
  }],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_newCofounderAddr',
    type: 'address',
  }],
  name: 'cofounderSwitchAddress',
  outputs: [{
    name: 'success',
    type: 'bool',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'uint256',
  }],
  name: 'previousFounders',
  outputs: [{
    name: '',
    type: 'address',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'address',
  }, {
    name: '',
    type: 'uint256',
  }],
  name: 'withdrawalsVotes',
  outputs: [{
    name: '',
    type: 'bool',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'claimedUnits',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'minimumPrepaidClaimedPercent',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'redeemedTokens',
  outputs: [{
    name: '',
    type: 'uint256',
  }],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_withdrawalID',
    type: 'uint256',
  }],
  name: 'approveWithdraw',
  outputs: [],
  payable: false,
  type: 'function',
}, {
  constant: true,
  inputs: [{
    name: '',
    type: 'uint256',
  }],
  name: 'earlyBackerList',
  outputs: [{
    name: '',
    type: 'address',
  }],
  payable: false,
  type: 'function',
}, {
  constant: false,
  inputs: [{
    name: '_index',
    type: 'uint256',
  }, {
    name: '_boughtTokensPrice',
    type: 'uint256',
  }, {
    name: '_tokenAmount',
    type: 'uint256',
  }, {
    name: '_privatePhrase',
    type: 'string',
  }, {
    name: '_backerRank',
    type: 'uint256',
  }],
  name: 'claimPrepaid',
  outputs: [],
  payable: false,
  type: 'function',
}, {
  inputs: [{
    name: '_founderHash',
    type: 'bytes32',
  }, {
    name: '_cofounderAddress',
    type: 'address',
  }, {
    name: '_numOfBackers',
    type: 'uint256',
  }],
  payable: false,
  type: 'constructor',
}, {
  payable: false,
  type: 'fallback',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_newFounderAddr',
    type: 'address',
  }],
  name: 'FounderSwitchRequestEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_newFounderAddr',
    type: 'address',
  }],
  name: 'FounderSwitchedEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: '_newCofounderAddr',
    type: 'address',
  }],
  name: 'CofounderSwitchedEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'backer',
    type: 'address',
  }, {
    indexed: false,
    name: 'index',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'price',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'amount',
    type: 'uint256',
  }],
  name: 'AddedPrepaidTokensEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'backer',
    type: 'address',
  }, {
    indexed: false,
    name: 'index',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'price',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'amount',
    type: 'uint256',
  }],
  name: 'PrepaidTokensClaimedEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'backer',
    type: 'address',
  }, {
    indexed: false,
    name: 'index',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'price',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'amount',
    type: 'uint256',
  }],
  name: 'TokensClaimedEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'backer',
    type: 'address',
  }, {
    indexed: false,
    name: 'amount',
    type: 'uint256',
  }],
  name: 'RedeemEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'withdrawalId',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'amount',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'reason',
    type: 'bytes',
  }],
  name: 'WithdrawalCreatedEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'withdrawalId',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'backer',
    type: 'address',
  }, {
    indexed: false,
    name: 'backerStakeWeigth',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'totalStakeWeight',
    type: 'uint256',
  }],
  name: 'WithdrawalVotedEvent',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: 'withdrawalId',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'stakeWeight',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'isMultiPayment',
    type: 'bool',
  }, {
    indexed: false,
    name: 'amount',
    type: 'uint256',
  }, {
    indexed: false,
    name: 'reason',
    type: 'bytes',
  }],
  name: 'WithdrawalApproved',
  type: 'event',
}];
