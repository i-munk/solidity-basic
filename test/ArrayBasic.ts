import { expect } from "chai";
import { ethers } from "hardhat";

describe("ArrayBasic", function () {
  it("Should add number to array", async function () {
    const Contract = await ethers.getContractFactory("ArrayBasic");
    const contract = await Contract.deploy();
    await contract.addNumber(42);
    expect(await contract.getValue(0)).to.equal(42);
  });

  it("Should return correct length", async function () {
    const Contract = await ethers.getContractFactory("ArrayBasic");
    const contract = await Contract.deploy();
    await contract.addNumber(1);
    await contract.addNumber(2);
    expect(await contract.getLength()).to.equal(2);
  });
});
