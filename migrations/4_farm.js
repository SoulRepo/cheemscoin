const { wei } = require("../test/utility");

const LockedCheemscoinLpFarm = artifacts.require("LockedCheemscoinLpFarm");
const Cheemscoin = artifacts.require("Cheemscoin");
const LpTokenMock = artifacts.require("LpTokenMock");

module.exports = async (deployer, network) => {
  let lpToken;
  if (network === "development") {
    await deployer.deploy(LpTokenMock, { overwrite: false });
    lpToken = await LpTokenMock.deployed();
  } else {
    lpToken.address = "0xce5382ff31b7a6F24797A46c307351FDE135C0Fd";
  }

  const cheemscoin = Cheemscoin.deployed();

  await deployer.deploy(LockedCheemscoinLpFarm, cheemscoin.address, lpToken.address, {
    overwrite: false,
  });

  // Add initial amount of Cheemscoin
  const lpFarm = await LockedCheemscoinLpFarm.deployed();
  await cheemscoin.approve(lpFarm.address, wei(172605));
  await lpFarm.donate(wei(172605));
};
