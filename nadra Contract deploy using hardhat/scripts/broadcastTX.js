// Transaction set on BLockchain 

var ethers =require('ethers');
const INFURA_API_URL = 'paste your infura api';
var PRIVATE_KEY='paste your private api';
const CONTRACT_ADDRESS = 'paste your contract address';
const CONTRACT_ABI = require('../artifacts/contracts/nadra.sol/NADRA.json');

let customHttpProvider = new ethers.providers.JsonRpcProvider(INFURA_API_URL);

async function addDetail(Id,_name, _age,_city,_country,_house_address){
    let wallet= new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    let signer = new ethers.Contract(CONTRACT_ADDRESS,CONTRACT_ABI.abi,wallet);

    var SET =await signer.addNadraDetails(Id,_name, _age,_city,_country,_house_address);
    console.log(SET)
    console.log('TX is completed')

}
addDetail(1,'Myname',19,'karachi', 'pakistan','100A');

































