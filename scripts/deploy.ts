import { ethers } from "hardhat";

async function main() {
  // 1. StringBasic
  const StringBasic = await ethers.getContractFactory("StringBasic");
  const stringBasic = await StringBasic.deploy();
  await stringBasic.waitForDeployment();
  console.log(`StringBasic deployed to: ${await stringBasic.getAddress()}`);

  // 2. ArrayBasic
  const ArrayBasic = await ethers.getContractFactory("ArrayBasic");
  const arrayBasic = await ArrayBasic.deploy();
  await arrayBasic.waitForDeployment();
  console.log(`ArrayBasic deployed to: ${await arrayBasic.getAddress()}`);

  // 3. MappingBasic
  const MappingBasic = await ethers.getContractFactory("MappingBasic");
  const mappingBasic = await MappingBasic.deploy();
  await mappingBasic.waitForDeployment();
  console.log(`MappingBasic deployed to: ${await mappingBasic.getAddress()}`);

  // 4. StructBasic
  const StructBasic = await ethers.getContractFactory("StructBasic");
  const structBasic = await StructBasic.deploy();
  await structBasic.waitForDeployment();
  console.log(`StructBasic deployed to: ${await structBasic.getAddress()}`);

  // 5. BytesBasic
  const BytesBasic = await ethers.getContractFactory("BytesBasic");
  const bytesBasic = await BytesBasic.deploy();
  await bytesBasic.waitForDeployment();
  console.log(`BytesBasic deployed to: ${await bytesBasic.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
