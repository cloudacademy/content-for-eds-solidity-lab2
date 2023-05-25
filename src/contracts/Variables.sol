// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Variables {
    string public nameOfTheContract; // state variable
    string public greetings; // state variable
    string public visibleByEveryone; // state variable

    constructor(string memory _nameOfTheContract) payable {
        nameOfTheContract = _nameOfTheContract;
        greetings = "Hello World";
        visibleByEveryone = "This should be visible by everyone";
    }

    function getResult() public pure returns(uint){
      uint a = 1; // local variable
      uint b = 2; // local variable
      return a + b; 
   }

}
