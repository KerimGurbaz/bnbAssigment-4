require("@nomiclabs/hardhat-waffle");

// Mnemonic ifadenizi buraya ekleyin
const mnemonic = "test test test test test test test test test test test junk";

module.exports = {
  solidity: "0.8.4",
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: mnemonic,
      },
    },
  },
};
