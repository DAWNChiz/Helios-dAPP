# 🌞 Helios-dApp

A decentralized application built on the Helios Testnet using Solidity and React, deployed and tested via Hardhat.

## 📁 Project Structure

├── contracts/           # Solidity smart contracts ├── scripts/             # Deployment and utility scripts ├── test/                # Smart contract tests ├── src/                 # React frontend ├── artifacts/           # Contract build files (auto-generated) ├── cache/               # Hardhat cache (auto-generated) ├── hardhat.config.js    # Hardhat configuration ├── package.json         # Project metadata and dependencies └── README.md            # Project documentation

---

## ⚙️ Getting Started

### Requirements

- [Node.js](https://nodejs.org) (>= v14)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org)

---

## 🧰 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/DAWNChiz/Helios-dApp.git
cd Helios-dApp

2. Install Dependencies

npm install

3. Install Frontend Dependencies

cd src
npm install
cd ..


---

🚀 Deployment

To deploy the contract to Helios Testnet:

1. Add your private key and RPC to .env:



PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://rpc-testnet.helioschain.network

2. Run the deployment script:



npx hardhat run scripts/deploy.js --network helios


---

🧪 Running Tests

npx hardhat test


---

🌐 Running the Frontend

cd src
npm start

The dApp will be available at http://localhost:3000.


---

🧾 License

This project is licensed under the MIT License.


---

🙌 Contribution

Feel free to fork the repo, open issues, and submit pull requests.

---
