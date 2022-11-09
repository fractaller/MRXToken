// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./SafeERC20.sol";
import "./Ownable.sol";

contract TokenLockForTeam is Ownable {
    using SafeERC20 for IERC20;

    // ERC20 basic token contract being held
    IERC20 public immutable token;

    // 锁仓支付地址
    address public payer;

    // 开始时间
    uint256 public startDate;

    // 线性释放时间
    uint256 public releaseDate;

    // 首次解锁期限
    uint256 public immutable firstTerm = 30 * 24 * 3600;

    // 释放间隔 90天
    uint256 public immutable releaseInterval = 90 * 24 * 3600;

    // 可释放百分比 [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    uint256[] public releasePercents = [2, 5, 10, 16, 23, 31, 40, 50, 61, 73, 86, 100];

    // 锁仓数量
    mapping (address => uint256) public lockedAmounts;

    // 释放数量
    mapping (address => uint256) public releasedAmount;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function activate(address _payer, uint256 _openDate) external onlyOwner {
        require(0 == startDate || block.timestamp <= _openDate, "Lock time exceed");
        payer = _payer;
        startDate = _openDate + firstTerm;
        releaseDate = startDate + releaseInterval;
    }

    function destroy(address payable receiver) external onlyOwner {
        require(0 == startDate || block.timestamp <= startDate, "Lock time exceed");
        token.transfer(receiver, token.balanceOf(address(this)));
        selfdestruct(receiver);
    }

    function lock(address user, uint amount) external onlyOwner {
        require(0 == startDate || block.timestamp <= startDate, "Lock time exceed");
        lockedAmounts[user] += amount;

        require(token.balanceOf(payer) >= amount, "Insufficient balance for lock");
        token.transferFrom(payer, address(this), amount);
    }

    function lockBatch(address[] memory addresses, uint[] memory amounts) external onlyOwner {
        require(0 == startDate || block.timestamp <= startDate, "Lock time exceed");
        require(addresses.length > 0 && addresses.length == amounts.length, "Mismatch array length");
        uint amountTotal = 0;
        for (uint i=0; i<addresses.length; i++) {
            amountTotal += amounts[i];
            lockedAmounts[addresses[i]] += amounts[i];
        }

        require(token.balanceOf(payer) >= amountTotal, "Insufficient balance for lock");
        token.transferFrom(payer, address(this), amountTotal);
    }

    function claim() external {
        this.claimFor(msg.sender);
    }

    function claimFor(address user) external {
        uint availableForClaim = this.available(user);
        require(availableForClaim > 0, "No available token to release");
        require(token.balanceOf(address(this)) >= availableForClaim, "Insufficient balance for claim");
        token.transfer(user, availableForClaim);
        releasedAmount[user] += availableForClaim;
    }

    function reassign(address user, address to) external onlyOwner {
        lockedAmounts[to] += lockedAmounts[user];
        lockedAmounts[user] = 0;
        releasedAmount[to] += releasedAmount[user];
        releasedAmount[user] = 0;
    }

    function available(address user) external view returns (uint256) {
        // 没到释放时间
        if (block.timestamp < releaseDate) {
            return 0;
        }

        // 初次释放数量
        uint lockedAmount = lockedAmounts[user];

        // 释放次数
        uint releasedTimes = ((block.timestamp - releaseDate) / releaseInterval) + 1;
        releasedTimes = releasedTimes >= releasePercents.length ? releasePercents.length : releasedTimes;
        uint releasePercent = releasePercents[releasedTimes - 1];

        return ((lockedAmount * releasePercent) / 100) - releasedAmount[user];
    }
}