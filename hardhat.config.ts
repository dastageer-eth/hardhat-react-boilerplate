import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      }
    },
  },
  mocha: {
    timeout: 1000000,
  },
  networks : {
    mumbai : {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      allowUnlimitedContractSize: true
    },
    goerli : {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.GOERLI_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      allowUnlimitedContractSize: true
    },
  },
};

export default config;
