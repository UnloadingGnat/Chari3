// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Chari3 {
    struct Charity {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Charity) public charities;
    uint256 public charityCount = 0;

    function createCharity(address _owner, string memory _title, string memory _description, 
    uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
        Charity storage charity = charities[charityCount];

        require(charity.deadline < block.timestamp, "Deadline must be in the future");
        
        charity.owner = _owner;
        charity.title = _title;
        charity.description = _description;
        charity.target = _target;
        charity.deadline = _deadline;
        charity.amountCollected = 0;
        charity.image = _image;

        charityCount++;

        return charityCount - 1;
    }

    function donate(uint256 _id) public payable {
        uint256 ammount = msg.value;

        Charity storage charity = charities[_id];

        charity.donators.push(msg.sender);
        charity.donations.push(ammount);

        (bool sent,) = payable(charity.owner).call{value: ammount}("");
        if(sent) {
            charity.amountCollected += ammount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (charities[_id].donators, charities[_id].donations);
    }

    function getCharities() public view returns (Charity[] memory) {
        Charity[] memory charityArray = new Charity[](charityCount);

        for(uint256 i = 0; i < charityCount; i++) {
            charityArray[i] = charities[i];
        }

        return charityArray;
    }
}