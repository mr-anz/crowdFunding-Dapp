
const {ethers} = require("hardhat");

async function main() {


  const CrowdFunding = await ethers.getContractFactory('CrowdFunding')
  const crowdFunding = await CrowdFunding.deploy()
  
  

  console.log('====================================');
  console.log(`crowdFunding deployed at :${crowdFunding.address}`);
  console.log('====================================');

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
