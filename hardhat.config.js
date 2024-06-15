require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config({ path: __dirname + "/.env" });

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    bsctest: {
      url: process.env.PROVIDER_URL,
      accounts: [`0x${process.env.PRIV_KEY}`],
      gasPrice: 5000000000000000000000000,
    },
  },
};
