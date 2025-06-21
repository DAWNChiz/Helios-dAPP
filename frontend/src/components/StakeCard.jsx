import { useState } from "react";

const StakeCard = ({ onStake, onWithdraw }) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="p-4 border rounded-xl shadow-md max-w-sm">
      <input
        type="number"
        placeholder="Enter amount"
        className="border p-2 w-full mb-2"
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex gap-2">
        <button onClick={() => onStake(amount)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Stake
        </button>
        <button onClick={() => onWithdraw(amount)} className="bg-red-500 text-white px-4 py-2 rounded">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default StakeCard;
