require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0xef44af6e6620d243e8f1701dbb7a4b39bfeab173c6020c60945fb33f298dae4f"]
    }
  }
};
