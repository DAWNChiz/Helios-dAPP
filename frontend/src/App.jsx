import { useState } from "react";
import { ethers } from "ethers";
import DawnStakerABI from "./abis/DawnStaker.json";

const CONTRACT_ADDRESS = "0xYourContractAddress";

function App() {
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const connect = async () => {
    const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
    await ethProvider.send("eth_requestAccounts", []);
    const signer = ethProvider.getSigner();
    const staker = new ethers.Contract(CONTRACT_ADDRESS, DawnStakerABI, signer);
    setProvider(ethProvider);
    setContract(staker);
  };

  const stake = async () => {
    if (!contract) return;
    const tx = await contract.stake(ethers.utils.parseEther(amount));
    await tx.wait();
  };

  const withdraw = async () => {
    if (!contract) return;
    const tx = await contract.withdraw(ethers.utils.parseEther(amount));
    await tx.wait();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dawn Staking dApp</h1>
      <button onClick={connect}>Connect Wallet</button>
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        className="border px-2"
      />
      <button onClick={stake}>Stake</button>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
}

export default App;
