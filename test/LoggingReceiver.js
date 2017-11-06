var LoggingReceiver = artifacts.require('../contracts/LoggingReceiver.sol');
var awaitEvent = require("./helpers/awaitEvent.js");

contract("LoggingReceiver", function(accounts) {
    let receiver;
    beforeEach(async function() {
        receiver = await LoggingReceiver.new();
    });

    it("should log TokenTransfer events" , async () => {
        var Event = receiver.TokenTransfer({});

        await receiver.onTokenTransfer(accounts[1], 100, "0xffaa00");
        var event = await awaitEvent(Event);
        assert.equal(event.args.token, accounts[0]);
        assert.equal(event.args.from, accounts[1]);
        assert.equal(event.args.value, 100);
        assert.equal(event.args.data, "0xffaa00");
    });
});
