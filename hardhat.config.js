require("@nomicfoundation/hardhat-ignition-ethers");
const { vars } = require("hardhat/config");

const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const DEVELOPER_ACCOUNT_PK = vars.get("DEVELOPER_ACCOUNT_PK");
const POLYGONSCAN_API_KEY = vars.get("POLYGONSCAN_API_KEY");

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: [POLYGONSCAN_API_KEY]
    }
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [DEVELOPER_ACCOUNT_PK]
    }
  }
};
