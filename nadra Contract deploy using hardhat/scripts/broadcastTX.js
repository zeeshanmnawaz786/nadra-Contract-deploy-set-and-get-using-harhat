// Transaction set on BLockchain 

var ethers =require('ethers');
const INFURA_API_URL = 'https://rinkeby.infura.io/v3/4b23bef4af964a72af90e99ec8c93f21';
var PRIVATE_KEY='2e911f9576c27017615d69f5c6bb54ca89be7170d0f11cdba67478c4f88c94eb';
const CONTRACT_ADDRESS = '0xdd6db3d632c8677d9DAF4C950bc8EE1D0599188b';
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

































