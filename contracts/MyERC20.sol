// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IERC20.sol";

contract MyERC20  is IERC20{
    
     /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    //返回已经发行的数量
    function totalSupply() external override view returns (uint256) {
        return 0;
    }

    //用户余额
    function balanceOf(address account) external override view returns (uint256) {
        
        return 0;
    } 

    //转账到指定账户
    function transfer(address to, uint256 amount) external override returns (bool) {
        return true
    }
}