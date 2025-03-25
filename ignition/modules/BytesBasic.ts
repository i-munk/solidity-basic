// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BytesBasicModule = buildModule("BytesBasicModule", (m) => {
  const bytesBasic = m.contract("BytesBasic");

  return { bytesBasic };
});

export default BytesBasicModule;
