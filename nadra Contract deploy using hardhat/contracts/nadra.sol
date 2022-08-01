// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract NADRA{

    uint public dataCounter;
    
    struct nadraData{
        string name;
        uint age;
        string city;
        string country;
        string house_address;
    }

    mapping (uint => nadraData) public nadraMapping;

    function addNadraDetails(uint Id, string memory _name, uint _age,string memory _city,string memory _country,string memory _house_address) public{
        nadraMapping[Id] =nadraData(_name, _age, _city, _country, _house_address);
        dataCounter++;
    }

    function getNadraDetails(uint Id) public view returns(nadraData memory){
        return nadraMapping[Id];
    }
    function getAllNadraDetails() public view returns(nadraData[] memory){
        nadraData[] memory dataArr = new nadraData[](dataCounter);

        for (uint i=0; i<dataCounter; i++){
            dataArr[i] = nadraMapping[i+1];
        }
        return dataArr;
    }
}
