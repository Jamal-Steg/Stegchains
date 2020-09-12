var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde = require('expand-tilde');
var streamName = fs.readFileSync(expandTilde('~/dataOutput/streamName'), 'utf8');
streamName = streamName.replace(/(\r\n|\n|\r)/gm, "");
var walletAddressNode2 = fs.readFileSync(expandTilde('~/dataOutput/walletAddressNode2'), 'utf8');

//grants the second node access to the stream
var command3 = 'cd ' + expandTilde('~;') + "multichain-cli chaintest grant " + walletAddressNode2 + " send";
exec(command3, function (error, stdout, stderr) {
    console.log(command3);
    console.log(stdout);
});
