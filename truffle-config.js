const HDwallet = require('@truffle/hdwallet-provider')

const bsc_testnet = new HDwallet({
  privateKeys: ['<your private key here>'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545'
})

const bsc_mainnet = new HDwallet({
  privateKeys: ['<your private key here>'],
  providerOrUrl: 'https://bsc-dataseed1.binance.org'
})

module.exports = {
  networks: {
    bsctest: {
      provider: () => bsc_testnet,
      network_id: "97",
      gas: 9000000
    },
    bscmainnet: {
      provider: () => bsc_mainnet,
      network_id: '56',
      gas: 9000000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
