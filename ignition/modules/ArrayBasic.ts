// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ArrayBasicModule = buildModule("ArrayBasicModule", (m) => {
  const arrayBasic = m.contract("ArrayBasic");

  return { arrayBasic };
});

export default ArrayBasicModule;
