// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Functions {

    modifier isAdult(uint age) {
      require(age >= 18, "Must be 18 or older");
      _;
    }



    function functionOne() public pure returns (string memory) {
        return "Hello World";
    } 
    
    function functionTwo(string memory input) public pure returns (string memory) {
        return input;
    } 

    function functionThree(string memory name, uint age) public pure returns (string memory, uint) {
        return (name, age);
    }

    function functionFour(string memory name, uint age) isAdult(age) public pure returns (string memory) {
        return string.concat("Welcome to the club", name);
    }
}
