## DAOX integration guide

To integrate DAOX and start accepting BTC and other cryptocurrencies in your Ethereum Smart contracts you should:

1. Get list of supported tokens -- TODO impl method
2. Implement [TokenReceiver](contracts/TokenReceiver.sol) interface in your smart contract.
onTokenTransfer function will be called from Token smart contract when your contract received payment.
⋅⋅* msg.sender - token address. You MUST check this address before processing payment. This address should match with BTC token address (or other cryptocurrency token)
⋅⋅* from - sender of BTC-backed (or other cryptocurrency) token. If new tokens are mint this address is 0x0
⋅⋅* value - number of tokens sent
⋅⋅* data - arbitrary byte array describing transaction (for example it can be address of the future token owner)
3. Integrate [issue](https://api.daox.io/docs/#/default/issue) method call into your website. Parameters description:
⋅⋅* token - BTC-backed (or other cryptocurrency) token address
⋅⋅* to - receiving contract address (from p.2)
⋅⋅* data - description of the order (usually it should be your user's ethereum address. Exactly same data will be sent in onTokenTransfer call)
4. Optionally: Use [getRequestStatus](https://api.daox.io/docs/#/default/getRequestStatus) to check payment status

## Examples

- [LoggingReceiver](contracts/LoggingReceiver.sol) - simple smart-contract for receiving tokens. It just logs incoming transactions
- Sale contract - TODO