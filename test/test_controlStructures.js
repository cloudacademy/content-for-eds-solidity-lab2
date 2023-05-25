const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect, assert } = require("chai");


describe("ControlStructures", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployContract() {
    const Contract = await ethers.getContractFactory("ControlStructures");
    const contract = await Contract.deploy();
    return { contract };
  }

  describe("test if functionOne has if else statement", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);

      const input = 1;
      expect(await contract.functionOne(input)).to.equal("someNumber is less than 10");

      const input2 = 12;
      expect(await contract.functionOne(input2)).to.equal("someNumber is greater than 10");
    });
  });

  describe("test if functionTwo has if else-if else statement", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);

      const input = 1;
      expect(await contract.functionTwo(input)).to.equal("someNumber is less than 10");

      const input2 = 10;
      expect(await contract.functionTwo(input2)).to.equal("someNumber is equal to 10");

      const input3 = 12;
      expect(await contract.functionTwo(input3)).to.equal("someNumber is greater than 10");
    });
  });

  describe("test if functionThree has for loop declared and it looks for even numbers", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);

      const input = [1,2,3,4,5,6,7];
      const expected = 3;
      const responce = await contract.functionThree(input);
      expect(responce).to.equal(expected);
    });
  });

  describe("test if functionFour has while loop declared and it looks for even numbers", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);

      const input = 12;
      const expected = 6;
      const responce = await contract.functionFour(input);
      expect(responce).to.equal(expected);
    });
  });

  describe("test if functionFive has while loop declared and it looks for even numbers", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);

      const input = 12;
      const expected = 6;
      const responce = await contract.functionFive(input);
      expect(responce).to.equal(expected);
    });
  });

  describe("test if functionSix has while loop declared and it breaks when finds first 2 even numbers", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);

      const input = 12;
      const expected = 2;
      const responce = await contract.functionSix(input);
      expect(responce).to.equal(expected);
    });
  });


  describe("test if functionSeven has while loop declared and it skipps when finds 2", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);

      const input = 12;
      const expected = 5;
      const responce = await contract.functionSeven(input);
      expect(responce).to.equal(expected);
    });
  });
});
