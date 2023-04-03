const { usePlugin } = require('@nomiclabs/buidler/config')
const hooks = require('./scripts/buidler-hooks')

usePlugin('@aragon/buidler-aragon')

module.exports = {
  defaultNetwork: 'matic',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    coverage: {
      url: 'http://localhost:8555',
    },
    rinkeby: {
      registry: "0x98df287b6c145399aaa709692c8d308357bc085d",
      url: "https://rinkeby.infura.io/v3/",
      network: "rinkeby"
    },    
    matic: {
      network: "matic",
      registry: "0x3C70A0190D09F34519e6E218364451ADD21b7d4b",
      url: 'https://matic-mainnet.chainstacklabs.com',
      chainID: 137,      
      accounts: [''],
      timeout: 100000
    },       
  },
  solc: {
    version: '0.4.24',
    optimizer: {
      enabled: true,
      runs: 10000,
    },
  },
  gasReporter: {
    enabled: !!process.env.GAS_REPORTER,
  },
  aragon: {
    appServePort: 3001,
    clientServePort: 3000,
    appSrcPath: 'app/',
    appBuildOutputPath: 'dist/',
    hooks,
  },
}
