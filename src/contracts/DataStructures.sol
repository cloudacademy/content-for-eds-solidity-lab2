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
        
        // Struct
        person = Person({
            name: "Adam",
            age: 100,
            height: 180,
            senior: true
        });

        // Array
        sampleArray = ['a', 'b', 'c'];

        // Enum
        currentState = State.DONE;

        // Mapping
        people[1] = person;
    }



    function getTuple() public pure returns(int, bool){
      return (7, true);
    }

}
