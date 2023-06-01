// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Functions {

    modifier isAdult(uint age) {
      require(age >= 18, "Must be 18 or older");
      _;
    }

    //Step1: Create a public function called functionOne() that returns a string "Hello World"
    
    //Step2: Create a public function called functionTwo() that takes a string as input and returns the same string

    //Step3: Create a public function called functionThree() that takes a string and an uint as input and returns a tuple (string, uint)

    //Step4: Create a public function called functionFour() that takes a string and an uint as input. Then it passes age to the modifier isAdult and returns a string "Welcome to the club" + name (Hint use string.concat)
}
