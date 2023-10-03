import { ethers } from "hardhat";

const main = async() => {
  const [deployer] = await ethers.getSigners();

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(100000000000);
  const address = await lock.getAddress();
  console.log("Ticket address:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
