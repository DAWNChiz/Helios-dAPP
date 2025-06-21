import { useState } from "react";
import { ethers } from "ethers";
import StakeCard from "./components/StakeCard";
import DawnStakerABI from "./abis/DawnStaker.json";

const CONTRACT_ADDRESS = "0xYourContractAddress";

function App() {
  const [contract, setContract] = useState(null);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const staker = new ethers.Contract(CONTRACT_ADDRESS, DawnStakerABI, signer);
    setContract(staker);
  };

  const handleStake = async (amount) => {
    const tx = await contract.stake(ethers.utils.parseEther(amount));
    await tx.wait();
  };

  const handleWithdraw = async (amount) => {
    const tx = await contract.withdraw(ethers.utils.parseEther(amount));
    await tx.wait();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dawn Staking dApp</h1>
      <button onClick={connect} className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
        Connect Wallet
      </button>
      {contract && <StakeCard onStake={handleStake} onWithdraw={handleWithdraw} />}
    </div>
  );
}

export default App;
