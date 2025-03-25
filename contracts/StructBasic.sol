// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StructBasic {
    // 📦 사용자 구조체 정의
    struct User {
        string name;
        uint256 age;
        address wallet;
    }

    // 📁 단일 사용자 저장소
    User public singleUser;

    function setSingleUser(string memory _name, uint256 _age, address _wallet) public {
        singleUser = User(_name, _age, _wallet);
    }

    function getSingleUser() public view returns (string memory, uint256, address) {
        return (singleUser.name, singleUser.age, singleUser.wallet);
    }

    function updateSingleUserAge(uint256 _newAge) public {
        singleUser.age = _newAge;
    }

    function deleteSingleUser() public {
        delete singleUser;
    }

    // 📋 구조체 배열: 여러 사용자 저장
    User[] public userList;

    function addUserToList(string memory _name, uint256 _age) public {
        userList.push(User(_name, _age, msg.sender));
    }

    function getUserFromList(uint256 index) public view returns (string memory, uint256, address) {
        require(index < userList.length, "Index out of bounds");
        User memory u = userList[index];
        return (u.name, u.age, u.wallet);
    }

    function getUserListLength() public view returns (uint256) {
        return userList.length;
    }

    // 📌 주소 기반 구조체 매핑
    mapping(address => User) public users;

    function register(string memory _name, uint256 _age) public {
        users[msg.sender] = User(_name, _age, msg.sender);
    }

    function getMyProfile() public view returns (string memory, uint256, address) {
        User memory u = users[msg.sender];
        return (u.name, u.age, u.wallet);
    }
}