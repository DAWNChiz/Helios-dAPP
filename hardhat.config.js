require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    helios: {
      url: "https://rpc-public.testnet.helioschain.network", // Helios testnet RPC
      accounts: [process.env.PRIVATE_KEY], // store in .env
    },
  },
};
