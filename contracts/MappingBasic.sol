// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MappingBasic {
    // 💰 주소별 잔액 저장 (기본 매핑 예제)
    mapping(address => uint256) public balances;

    function setBalance(address user, uint256 amount) public {
        balances[user] = amount;
    }

    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }

    // function resetMyBalance() public {
    //     delete balances[msg.sender]; // 잔액 초기화
    // }

    // 🔐 주소별 권한 설정 (중첩 매핑 예제)
    mapping(address => mapping(uint256 => bool)) public permissions;

    function setPermission(address user, uint256 id, bool status) public {
        permissions[user][id] = status;
    }

    function hasPermission(address user, uint256 id) public view returns (bool) {
    return permissions[user][id];
}

    // function revokePermission(uint256 permissionId) public {
    //     permissions[msg.sender][permissionId] = false;
    // }

    // function hasMyPermission(uint256 permissionId) public view returns (bool) {
    //     return permissions[msg.sender][permissionId];
    // }

    // 🧾 사용자 정보 저장 (매핑 + 구조체 예제)
    struct User {
        string name;
        uint256 age;
    }

    mapping(address => User) public users;

    function setUser(address user, string memory name, uint256 age) public {
        users[user] = User(name, age);
    }

    function getUser(address user) public view returns (string memory, uint256) {
        User memory u = users[user];
        return (u.name, u.age);
    }
}