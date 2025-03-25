// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StringBasicModule = buildModule("StringBasicModule", (m) => {
  const stringBasic = m.contract("StringBasic");

  return { stringBasic };
});

export default StringBasicModule;
