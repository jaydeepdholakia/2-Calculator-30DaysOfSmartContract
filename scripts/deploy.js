const { ethers } = require("hardhat");

async function main() {
  // Get Deployer's account details
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account: ", deployer.address);
  console.log("Deployer's balance: ", (await deployer.getBalance()).toString());

  // Deploying contract
  const calculator = await ethers.getContractFactory("Calculator");
  const _contract = await calculator.deploy();
  const contract = await _contract.deployed();

  console.log("Contract deployed at: ", contract.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
