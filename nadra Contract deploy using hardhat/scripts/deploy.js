
const hre = require("hardhat");

async function main() {
  const Nadra = await hre.ethers.getContractFactory('NADRA');
  const nadra = await Nadra.deploy();

  await nadra.deployed();

  console.log("My contract deployed to :", nadra.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
