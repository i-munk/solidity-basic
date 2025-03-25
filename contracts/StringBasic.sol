// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StringBasic {
    string public greeting = "Hello, Solidity!";

    function getLength(string memory str) public pure returns (uint) {
        return bytes(str).length;
    }

    function concatenate(string memory str1, string memory str2) public pure returns (string memory) {
        return string(abi.encodePacked(str1, str2));
    }

    function isEqual(string memory str1, string memory str2) public pure returns (bool) {
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
    }

    function convertToBytes(string memory str) public pure returns (bytes memory) {
        return bytes(str);
    }

    function convertToString(bytes memory byteData) public pure returns (string memory) {
        return string(byteData);
    }
}