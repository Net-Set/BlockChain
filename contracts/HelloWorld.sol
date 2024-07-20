// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greet = "Hello, World!";
    
    // Correct function name and spelling
    function hello() public view returns (string memory) {
        return greet;
    }
}
