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

  describe("step 1", function () {
    it("test if person is  declared", async function () {
      const { contract } = await loadFixture(deployContract);
      const person = await contract.person();
      expect(person[0]).not.to.be.empty;
    });
  });

  describe("step 2", function () {
    it("test if sampleArray is  declared", async function () {
      const { contract } = await loadFixture(deployContract);
      const sampleArray = await contract.sampleArray(0);
      expect(sampleArray).not.to.be.empty;
    });
  });

  describe("step 3", function () {
    it("test if currentState is declared as Enum", async function () {
      const { contract } = await loadFixture(deployContract);
      const currentState = await contract.currentState();
      expect(currentState).is.not.a('string');
    });
  });


  describe("step 4", function () {
    it("test if people map is populated", async function () {
      const { contract } = await loadFixture(deployContract);
      const people = await contract.people(1);
      expect(people[0]).not.to.be.empty;
    });
  });
  
  describe("step 5", function () {
    it("test if getTuple() function returns tuple", async function () {
      const { contract } = await loadFixture(deployContract);
      const result = await contract.getTuple();
      console.log(result);
      expect(result[0]).to.equal(7);
      expect(result[1]).to.equal(true);
    });
  });

});
