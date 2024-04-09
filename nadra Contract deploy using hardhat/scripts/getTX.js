
// Transaction Get on BLockchain 


var ethers =require('ethers');

const INFURA_API_URL = 'paste your infura api';
const CONTRACT_ADDRESS = 'paste your contract address';
const CONTRACT_ABI = require('../artifacts/contracts/nadra.sol/NADRA.json');

let customHttpProvider = new ethers.providers.JsonRpcProvider(INFURA_API_URL);

async function Get(Id){
    let contract = new ethers.Contract(CONTRACT_ADDRESS,CONTRACT_ABI.abi,customHttpProvider);

    var GET =await contract.getNadraDetails(Id);
    console.log(GET.toString())
    console.log('TX is completed')

}
Get(1)
