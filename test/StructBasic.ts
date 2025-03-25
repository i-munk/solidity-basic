import { expect } from "chai";
import { ethers } from "hardhat";

describe("StructBasic", function () {
  it("Should set and get single user", async function () {
    const Contract = await ethers.getContractFactory("StructBasic");
    const contract = await Contract.deploy();
    const [user] = await ethers.getSigners();
    await contract.setSingleUser("Bob", 30, user.address);
    const result = await contract.getSingleUser();
    expect(result[0]).to.equal("Bob");
    expect(result[1]).to.equal(30);
    expect(result[2]).to.equal(user.address);
  });

  it("Should update age of single user", async function () {
    const Contract = await ethers.getContractFactory("StructBasic");
    const contract = await Contract.deploy();
    const [user] = await ethers.getSigners();
    await contract.setSingleUser("Alice", 25, user.address);
    await contract.updateSingleUserAge(35);
    const result = await contract.getSingleUser();
    expect(result[1]).to.equal(35);
  });

  it("Should add and retrieve from user list", async function () {
    const Contract = await ethers.getContractFactory("StructBasic");
    const contract = await Contract.deploy();
    const [user] = await ethers.getSigners();
    await contract.addUserToList("Tom", 22);
    const result = await contract.getUserFromList(0);
    expect(result[0]).to.equal("Tom");
    expect(result[1]).to.equal(22);
    expect(result[2]).to.equal(user.address);
  });

  it("Should register and retrieve user via mapping", async function () {
    const Contract = await ethers.getContractFactory("StructBasic");
    const contract = await Contract.deploy();
    const [user] = await ethers.getSigners();
    await contract.register("Jane", 28);
    const result = await contract.getMyProfile();
    expect(result[0]).to.equal("Jane");
    expect(result[1]).to.equal(28);
    expect(result[2]).to.equal(user.address);
  });
});
