import { expect } from "chai";
import { ethers } from "hardhat";

describe("BytesBasic", function () {
  it("Should return initial dynamic bytes value length", async function () {
    const Contract = await ethers.getContractFactory("BytesBasic");
    const contract = await Contract.deploy();
    const length = await contract.getLength();
    expect(length).to.equal(5); // "Hello" has 5 bytes
  });

  it("Should return the correct byte at index 1", async function () {
    const Contract = await ethers.getContractFactory("BytesBasic");
    const contract = await Contract.deploy();
    const byteAt1 = await contract.getByteAt(1);
    expect(byteAt1).to.equal("0x65"); // 'e'
  });

  it("Should push and pop bytes correctly", async function () {
    const Contract = await ethers.getContractFactory("BytesBasic");
    const contract = await Contract.deploy();
    await contract.pushByte("0x21"); // '!'
    expect(await contract.getLength()).to.equal(6);
    await contract.popByte();
    expect(await contract.getLength()).to.equal(5);
  });

  it("Should convert string to bytes and back", async function () {
    const Contract = await ethers.getContractFactory("BytesBasic");
    const contract = await Contract.deploy();
    const bytesValue = await contract.stringToBytes("Hi");
    const strValue = await contract.bytesToString(bytesValue);
    expect(strValue).to.equal("Hi");
  });
});
