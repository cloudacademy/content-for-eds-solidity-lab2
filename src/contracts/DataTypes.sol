// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DataTypes {
    uint public unlockTime; // state variable
    address payable public owner; // state variable
    bool public isReady; // state variable

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);// special variable
        isReady = true;
    }
}
