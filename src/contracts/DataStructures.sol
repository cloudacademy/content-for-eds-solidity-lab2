// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DataStructures {

    enum State{ NEW, IN_PROGRESS, DONE }
    State public currentState;

    string[3] public sampleArray;

    struct Person {
        string name;
        uint age;
        uint height;
        bool senior;
    }

    //Mapping
    mapping(uint => Person) public people;

    Person public person;

    constructor() payable {
        
        // Step1: Declare a variable called person of type Person (struct)

        // Step2: Declare a variable called sampleArray of type string array containing 3 elements: "a", "b", "c"

        // Step3: Declare a variable called currentState of type State (enum) and assign the value State.DONE to it

        // Step4: Declare a variable called people of type mapping (mapping) that maps uint to Person
    }


    // Step5: Update a function called getTuple to return a tuple (int, bool) with the values 7 and true
    function getTuple() public pure returns(string memory){
        return ("Hello World");
    }

}
