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
Helios-dAPP/ ├── contracts/          # Solidity smart contracts ├── scripts/            # Deployment scripts ├── test/               # Contract unit tests ├── src/                # React app │   └── components/     # Reusable components ├── hardhat.config.js   # Hardhat configuration ├── package.json        # Project dependencies └── README.md           # This file

---

## 🧾 Prerequisites

- Node.js ≥ 18.x
- [MetaMask](https://metamask.io/) installed
- [Helios Testnet Faucet](https://faucet.helioschain.network) (for test tokens)
- Your private key (used only in `.env`)

---

## 🔧 Installation

bash
# Clone the repo
git clone https://github.com/DAWNChiz/Helios-dAPP.git
cd Helios-dAPP

# Install dependencies
npm install


---

🔐 Environment Setup

Create a .env file in the root:

PRIVATE_KEY=your_private_key_here

> 🚨 Never share this key or commit .env!




---

🧱 Compile & Deploy Smart Contracts

npx hardhat compile
npx hardhat run scripts/deploy.js --network helios

Once deployed, note your contract address and update src/constants.js.


---

🧪 Run Tests

npx hardhat test


---

🌐 Run the Frontend

npm run dev

The app runs at http://localhost:5173


---

🔗 Connect to Helios Testnet

MetaMask Settings:

RPC: https://rpc-public.testnet.helioschain.network

Chain ID: 111000

Currency Symbol: tHELI



---

📌 XP Multiplier Tag

Deploying verified contracts and building this dApp qualifies you for the Builder tag on Helios:

✅ 3x XP Multiplier

🧠 Requires smart contract verification

📎 Contribute via GitHub



---

📄 License

MIT


---

🤝 Contributing

Pull requests are welcome! Please open an issue first if you'd like to discuss a change.


---

🙌 Credits

Inspired by MrBips/Helios-Staking but built fully from scratch with custom design, structure, and logic.


---

🔍 Resources

📘 Helios Docs: Developing dApps

💡 Helios EVM + Cosmos APIs

🔒 Smart Contract Guide


---