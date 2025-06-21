// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract DawnStaker {
    IERC20 public token;
    address public owner;

    struct Stake {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Stake) public stakes;

    constructor(address _token) {
        token = IERC20(_token);
        owner = msg.sender;
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be > 0");
        token.transferFrom(msg.sender, address(this), amount);
        stakes[msg.sender].amount += amount;
        stakes[msg.sender].timestamp = block.timestamp;
    }

    function withdraw(uint256 amount) external {
        require(amount > 0 && stakes[msg.sender].amount >= amount, "Insufficient staked amount");
        stakes[msg.sender].amount -= amount;
        token.transfer(msg.sender, amount);
    }

    function stakedBalance(address user) external view returns (uint256) {
        return stakes[user].amount;
    }
}
