// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ControlStructures {

    function functionOne(uint someNumber) public pure returns (string memory) {
        string memory result;
        if (someNumber < 10) {
         result = "someNumber is less than 10";
        } else {
            result =  "someNumber is greater than 10";
        }
        return result;
    }

    function functionTwo(uint someNumber) public pure returns (string memory) {
        string memory result;
        if (someNumber < 10) {
         result = "someNumber is less than 10";
        } else if (someNumber == 10) {
            result =  "someNumber is equal to 10";
        } else {
            result =  "someNumber is greater than 10";
        }
        return result;
    }

    function functionThree(uint[] memory data) public pure returns (uint) {
        uint sizeOfArray = data.length;
        uint countEven = 0;
        for (uint i = 1; i < sizeOfArray; i++) {
            bool isEven = data[i] % 2 == 0;
            if (isEven) {
                countEven++;
            }
        }
        return countEven;
    }

    function functionFour(uint times) public pure returns (uint) {
        uint count = 0;
        uint evenCount = 0;

        while (count < times) {
            count++;

            bool isEven = count % 2 == 0;
            if (isEven) {
               evenCount++;
            }
        }
        return evenCount;
    }



    function functionFive(uint times) public pure returns (uint) {
        uint count = 0;
        uint evenCount = 0;

        do {
            count++;

            bool isEven = count % 2 == 0;
            if (isEven) {
               evenCount++;
            }
        } while (count < times);

        return evenCount;
    }

    function functionSix(uint times) public pure returns (uint) {
        uint count = 0;
        uint evenCount = 0;

        while (count < times) {
            count++;

            bool isEven = count % 2 == 0;
            if (isEven) {
               evenCount++;
            }
            // If evenCount is 2, break out of the loop
            if(evenCount == 2) {
                break;
            }   
        }
        return evenCount;
    }

    function functionSeven(uint times) public pure returns (uint) {
        uint count = 0;
        uint evenCount = 0;

        while (count < times) {
            count++;

            // If count is 2, skip the rest of the loop
            if(count == 2) {
                continue;
            }  

            bool isEven = count % 2 == 0;
            if (isEven) {
               evenCount++;
            } 
        }
        return evenCount;
    }


}
