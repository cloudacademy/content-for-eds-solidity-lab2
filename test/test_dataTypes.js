const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("DataTypes", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployContract() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("DataTypes");
    const contract = await Contract.deploy(unlockTime);

    return { contract, unlockTime, owner };
  }

  describe("test if unlockTime variable  declared", function () {
    it("is declared?", async function () {
      const { contract, unlockTime } = await loadFixture(deployContract);
      expect(await contract.unlockTime()).to.equal(unlockTime);
    });
  });

  describe("test if owner variable declared", function () {
    it("is declared?", async function () {
      const { contract, owner } = await loadFixture(deployContract);
      expect(await contract.owner()).to.equal(owner.address);
    });
  });
  
  describe("test if isReady variable  declared", function () {
    it("is declared?", async function () {
      const { contract } = await loadFixture(deployContract);
      // expect variable isReady to be declared as true
      expect(await contract.isReady()).to.equal(true);
    });
  });

});
