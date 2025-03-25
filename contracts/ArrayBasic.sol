// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArrayBasic {
    // 1. 동적 배열
    uint256[] public numbers;

    function addNumber(uint256 num) public {
        numbers.push(num);
    }

    function removeLast() public {
        require(numbers.length > 0, "Array is empty");
        numbers.pop();
    }

    function getValue(uint256 index) public view returns (uint256) {
        require(index < numbers.length, "Index out of bounds");
        return numbers[index];
    }

    function getLength() public view returns (uint256) {
        return numbers.length;
    }

    function sumArray() public view returns (uint256 sum) {
        for (uint256 i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
    }

    // 2. 고정 배열
    uint256[3] public fixedNumbers = [1, 2, 3];

    // 3. 특정 요소 삭제
    function removeElement(uint256 index) public {
        require(index < numbers.length, "Index out of bounds");
        delete numbers[index]; // 값을 0으로 초기화, 배열 크기는 그대로
    }

    function removeAndShift(uint256 index) public {
        require(index < numbers.length, "Index out of bounds");
        for (uint256 i = index; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        numbers.pop(); // 마지막 요소 제거로 크기 줄이기
    }

    // 4. 다차원 배열
    uint256[][] public matrix;

    function addRow(uint256[] memory row) public {
        matrix.push(row);
    }
}