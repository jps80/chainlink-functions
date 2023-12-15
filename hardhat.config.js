
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const { INFURA_API_KEY, DEVELOPER_ACCOUNT_PK, POLYGONSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.19",
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
