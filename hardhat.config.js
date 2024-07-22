require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0x6136226bf575bdc021ec69c7687990e348889d8a77660d686f21988dc1a99e41"]
    }
  }
};
