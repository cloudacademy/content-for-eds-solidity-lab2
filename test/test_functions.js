const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect, assert } = require("chai");


describe("Functions", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployContract() {
    const Contract = await ethers.getContractFactory("Functions");
    const contract = await Contract.deploy();
    return { contract };
  }

  describe("test if functionOne is declared and returns string", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      expect(await contract.functionOne()).to.be.a("string");
    });
  });

  describe("test if functionTwo is declared and it returns input param as a string", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      const input = "test";
      expect(await contract.functionTwo(input)).to.equal(input);
    });
  });

  describe("test if functionThree is declared and it returns input param as a string", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      const name = "Mark";
      const age = 30;
      const response = await contract.functionThree(name, age)
      expect(response[0]).to.equal(name);
      expect(response[1]).to.equal(age);
    });
  });

  describe("test if functionFour is declared and uses function modifier", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      const name = "Mark";
      const age = 30;
      const response1 = await contract.functionFour(name, age)
      expect(response1).to.be.a("string");

      const name2 = "Mark";
      const age2 = 17;

      let response2;
      let errorMessage;
      try {
        response2 = await contract.functionFour(name2, age2)
      }
      catch (err) {
        errorMessage = err.message;
      }
      assert.include(errorMessage, "Must be 18 or older", "The error message should contain 'Must be 18 or older'");

    });
  });

});
