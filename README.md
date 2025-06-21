# 🌞 Helios-dApp

A decentralized staking dApp built for the Helios Testnet using Solidity, Hardhat, and React.

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

## Requirements

- [Node.js](https://nodejs.org) >= v14  
- [npm](https://www.npmjs.com/)  
- [Hardhat](https://hardhat.org)  

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