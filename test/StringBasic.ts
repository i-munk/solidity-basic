import { expect } from "chai";
import { ethers } from "hardhat";

describe("StringBasic", function () {
  it("Should return default greeting", async function () {
    const StringBasic = await ethers.getContractFactory("StringBasic");
    const stringBasic = await StringBasic.deploy();
    expect(await stringBasic.greeting()).to.equal("Hello, Solidity!");
  });

  it("Should return correct string length", async function () {
    const StringBasic = await ethers.getContractFactory("StringBasic");
    const stringBasic = await StringBasic.deploy();
    const length = await stringBasic.getLength("Solidity");
    expect(length).to.equal(8);
  });

  it("Should concatenate two strings", async function () {
    const StringBasic = await ethers.getContractFactory("StringBasic");
    const stringBasic = await StringBasic.deploy();
    const result = await stringBasic.concatenate("Sol", "idity");
    expect(result).to.equal("Solidity");
  });
});
