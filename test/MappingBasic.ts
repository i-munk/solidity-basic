import { expect } from "chai";
import { ethers } from "hardhat";

describe("MappingBasic", function () {
  it("Should set and get balance", async function () {
    const [user] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("MappingBasic");
    const contract = await Contract.deploy();
    await contract.setBalance(user.address, 100);
    expect(await contract.getBalance(user.address)).to.equal(100);
  });

  it("Should set and check permission", async function () {
    const Contract = await ethers.getContractFactory("MappingBasic");
    const contract = await Contract.deploy();
    await contract.setPermission(
      "0x0000000000000000000000000000000000000001",
      1,
      true
    );
    expect(
      await contract.hasPermission(
        "0x0000000000000000000000000000000000000001",
        1
      )
    ).to.equal(true);
  });

  it("Should register and retrieve user", async function () {
    const [user] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("MappingBasic");
    const contract = await Contract.deploy();
    await contract.setUser(user.address, "Alice", 500);
    const result = await contract.getUser(user.address);
    expect(result[0]).to.equal("Alice");
    expect(result[1]).to.equal(500);
  });
});
