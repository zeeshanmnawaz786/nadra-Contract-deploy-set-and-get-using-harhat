
// Transaction Get on BLockchain 


var ethers =require('ethers');

const INFURA_API_URL = 'https://rinkeby.infura.io/v3/4b23bef4af964a72af90e99ec8c93f21';
const CONTRACT_ADDRESS = '0xdd6db3d632c8677d9DAF4C950bc8EE1D0599188b';
const CONTRACT_ABI = require('../artifacts/contracts/nadra.sol/NADRA.json');

let customHttpProvider = new ethers.providers.JsonRpcProvider(INFURA_API_URL);

async function Get(Id){
    let contract = new ethers.Contract(CONTRACT_ADDRESS,CONTRACT_ABI.abi,customHttpProvider);

    var GET =await contract.getNadraDetails(Id);
    console.log(GET.toString())
    console.log('TX is completed')

}
Get(1)