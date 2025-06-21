const hre = require("hardhat");

async function main() {
  const tokenAddress = "0xYourTestTokenAddress"; // Replace this with deployed test token
  const DawnStaker = await hre.ethers.getContractFactory("DawnStaker");
  const staker = await DawnStaker.deploy(tokenAddress);

  await staker.deployed();
  console.log("DawnStaker deployed to:", staker.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
