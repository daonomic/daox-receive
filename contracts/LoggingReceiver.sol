pragma solidity ^0.4.15;


import "./TokenReceiver.sol";


contract LoggingReceiver is TokenReceiver {
    event TokenTransfer(address token, address from, uint256 value, bytes data);

    function onTokenTransfer(address _from, uint256 _value, bytes _data) {
        TokenTransfer(msg.sender, _from, _value, _data);
    }
}
