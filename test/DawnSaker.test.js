const { expect } = require("chai");

describe("DawnStaker", function () {
  let token, staker, owner, user;
  const initialSupply = ethers.utils.parseEther("1000");

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("TestToken");
    token = await Token.deploy("TestToken", "TTK", initialSupply);
    await token.deployed();

    const Staker = await ethers.getContractFactory("DawnStaker");
    staker = await Staker.deploy(token.address);
    await staker.deployed();

    await token.transfer(user.address, ethers.utils.parseEther("100"));
  });

  it("allows staking", async () => {
    await token.connect(user).approve(staker.address, ethers.utils.parseEther("10"));
    await staker.connect(user).stake(ethers.utils.parseEther("10"));
    const stake = await staker.stakes(user.address);
    expect(stake.amount).to.equal(ethers.utils.parseEther("10"));
  });

  it("allows withdrawal", async () => {
    await token.connect(user).approve(staker.address, ethers.utils.parseEther("20"));
    await staker.connect(user).stake(ethers.utils.parseEther("20"));
    await staker.connect(user).withdraw(ethers.utils.parseEther("5"));
    const stake = await staker.stakes(user.address);
    expect(stake.amount).to.equal(ethers.utils.parseEther("15"));
  });
});
