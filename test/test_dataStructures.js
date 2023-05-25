const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");


describe("DataStructures", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployContract() {
    const Contract = await ethers.getContractFactory("DataStructures");
    const contract = await Contract.deploy();
    return { contract };
  }

  describe("test if person is  declared", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      const person = await contract.person();
      expect(person[0]).not.to.be.empty;
    });
  });

  describe("test if sampleArray is  declared", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      const sampleArray = await contract.sampleArray(0);
      expect(sampleArray).not.to.be.empty;
    });
  });

  describe("test if currentState is declared as Enum", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      const currentState = await contract.currentState();
      expect(currentState).is.not.a('string');
    });
  });


  describe("test if people map is populated", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      const people = await contract.people(1);
      expect(people[0]).not.to.be.empty;
    });
  });

});
