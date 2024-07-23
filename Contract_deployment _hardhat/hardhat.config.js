require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "";
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x19af347d2272c7a91ac1e78f4eb30ad10c6306c9` + `${PRIVATE_KEY}`],
    },
  },
};
