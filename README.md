# 🌞 Helios Staking dApp

A decentralized staking dApp built on the [Helios Testnet](https://testnet.helioschain.network), allowing users to stake ERC20 tokens, earn XP, and interact with verified smart contracts. This project uses **Hardhat**, **React (Vite)**, and **Ethers.js**.

---

## 🚀 Features

- ✅ Stake & withdraw tokens via a frontend interface
- ✅ Smart contract deployed on Helios Testnet
- ✅ React-based dApp UI using Ethers.js
- ✅ XP Multiplier-ready (`Builder` tag eligible!)
- ✅ Unit tests with Hardhat & Chai

---

## 🛠 Tech Stack

- Solidity (Smart Contracts)
- Hardhat (Development & Testing)
- React (Frontend)
- Ethers.js (Blockchain interaction)
- Vite (Frontend tooling)
- Helios Testnet

---

## 📁 Project Structure

```
├── contracts/           # Solidity smart contracts
├── scripts/             # Deployment and utility scripts
├── test/                # Smart contract tests
├── src/                 # React frontend
├── artifacts/           # Contract build files (auto-generated)
├── cache/               # Hardhat cache (auto-generated)
├── hardhat.config.js    # Hardhat configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## 🧾 Prerequisites

- Node.js ≥ 18.x
- [MetaMask](https://metamask.io/) installed
- [Helios Testnet Faucet](https://faucet.helioschain.network) (for test tokens)
- Your private key (used only in `.env`)

---

## 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/DAWNChiz/Helios-dAPP.git
cd Helios-dAPP

# Install dependencies
npm install

## Installation

```bash
git clone https://github.com/DAWNChiz/Helios-dApp.git
cd Helios-dApp
npm install
cd src
npm install
cd ..
```

## Environment Setup

Create a `.env` file in the root directory and add the following:

```
PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://rpc-testnet.helioschain.network
```

## Compile Contracts

```bash
npx hardhat compile
```

## Run Tests

```bash
npx hardhat test
```

## Deploy to Helios Testnet

```bash
npx hardhat run scripts/deploy.js --network heliosTestnet
```

## Frontend

To run the frontend app:

```bash
cd src
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

MIT