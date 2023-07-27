// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
    uint data;

    event MyEvent(uint newValue);

    function updateData(uint _data) external {
        emit MyEvent(_data);
        data = _data;
    }

    function readData() external view returns (uint) {
        return data;
    }
}
