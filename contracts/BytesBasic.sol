// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BytesBasic {
    // 1. 고정 크기 바이트 배열
    bytes32 public fixedBytes = 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef;

    // 2. 가변 크기 바이트 배열
    bytes public dynamicBytes = "Hello";

    // 동적 바이트 배열에 바이트 추가 (push)
    function pushByte(bytes1 newByte) public {
        dynamicBytes.push(newByte);
    }

    // 마지막 바이트 제거 (pop)
    function popByte() public {
        require(dynamicBytes.length > 0, "Array is empty");
        dynamicBytes.pop();
    }

    // 특정 인덱스의 바이트 조회
    function getByteAt(uint256 index) public view returns (bytes1) {
        require(index < dynamicBytes.length, "Index out of bounds");
        return dynamicBytes[index];
    }

    // 동적 바이트 배열 길이 확인
    function getLength() public view returns (uint256) {
        return dynamicBytes.length;
    }

    // 문자열을 바이트로 변환
    function stringToBytes(string memory str) public pure returns (bytes memory) {
        return bytes(str);
    }

    // 바이트를 문자열로 변환
    function bytesToString(bytes memory data) public pure returns (string memory) {
        return string(data);
    }
}