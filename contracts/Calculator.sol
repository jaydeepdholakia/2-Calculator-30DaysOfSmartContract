// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract Calculator {
    
    function add(int256 _num1, int256 _num2) pure external returns(int){
        return _num1 + _num2;
    }
    
    function sub(int256 _num1, int256 _num2) pure external returns(int){
        return _num1 - _num2;
    }
    
    function mul(int256 _num1, int256 _num2) pure external returns(int){
        return _num1*_num2;
    }
}