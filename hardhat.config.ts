import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-deploy'
import 'hardhat-watcher'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import '@openzeppelin/hardhat-upgrades'
require("dotenv").config();

export default {
  solidity: {
    compilers: [
      {
        version: "0.8.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 5,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 600000,
  },

  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    localhost: {
      url: "http://localhost:8545",
    },
    bnbTestnet: {
      url: process.env.BNB_TESTNET_RPC,
      accounts: process.env.DEVNET_PRIVKEY !== undefined ? [process.env.DEVNET_PRIVKEY] : [],
    },
    bnbMainnet: {
      url: process.env.BNB_MAINNET_RPC,
      accounts: process.env.DEVNET_PRIVKEY !== undefined ? [process.env.DEVNET_PRIVKEY] : [],
    }
  },
  watcher: {
    compilation: {
      tasks: ["compile"],
    },
    test: {
      tasks: ["test"],
      files: ["./test/*"],
    },
  }
}