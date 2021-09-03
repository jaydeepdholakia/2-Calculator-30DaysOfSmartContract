const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Testing ", function () {
  let contract;
  beforeEach(async function () {
    // Deploying the contract
    const cal = await ethers.getContractFactory("Calculator");
    contract = await cal.deploy();
  });

  it("Testing Add", async function () {
    expect(await contract.add(4, 1)).to.equal(5);
  });
  it("Testing Subtraction", async function () {
    expect(await contract.sub(1, 4)).to.equal(-3);
  });
  it("Testing Multiplication", async function () {
    expect(await contract.mul(4, 4)).to.equal(16);
  });
});
