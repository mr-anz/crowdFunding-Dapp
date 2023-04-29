require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */

const GEORLI_RPC_URL = process.env.GEORLI_RPC_URL || `https://eth-goerli.alchemyapi.io/v2/9X1ykrdnmkueM4cHssK_NnrblGoqSUsN`
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
      goerli: {
      url: GEORLI_RPC_URL,
      accounts: [PRIVATE_KEY], // Replace with your private key
      chainId: 5,
      gas: "auto",
      gasPrice: "auto",
      blockConfirmations:6,
    },
   /* sepolia: {
      url: `https://eth-<NETWORK_NAME>.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x<PRIVATE_KEY>`], // Replace with your private key
      chainId: 648529,
      gas: "auto",
      gasPrice: "auto",
    },*/
  },
};
