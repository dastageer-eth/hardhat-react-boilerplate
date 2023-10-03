import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", () => {

  before(async () => {
    const [owner, addr, ...addrs] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("Lock");
    const contract = await Contract.connect(owner).deploy(100000000000);
  });

  it("Test-case-hear", async() => {

  });

});
