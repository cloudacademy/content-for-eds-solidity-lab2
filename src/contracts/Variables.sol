// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Variables {
    string public nameOfTheContract; // state variable
    string public greetings; // state variable

    // Step3: make this variable visible by everyone by adding the keyword public
    string visibleByEveryone; // state variable

    constructor(string memory _nameOfTheContract) payable {
        // Step1: Assign the parameter to the variable called nameOfTheContract

        // Step2: Assign the string "Hello World" to the variable called greetings

        visibleByEveryone = "This should be visible by everyone";
    }

    function getResult() public pure returns(uint){
        // Step4: Create a local variable called a and assign the value 1 to it,
        // create a local variable called b and assign the value 2 to it,
        // return the sum of a and b
        return 0; 
   }

}
