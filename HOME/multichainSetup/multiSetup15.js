var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde = require('expand-tilde');
var streamName = fs.readFileSync(expandTilde('~/dataOutput/streamName'), 'utf8');
streamName = streamName.replace(/(\r\n|\n|\r)/gm, "");
var walletAddressNode2 = fs.readFileSync(expandTilde('~/dataOutput/walletAddressNode2'), 'utf8');

//grants the second node access to the stream with write permissions
var command4 = 'cd ' + expandTilde('~;') + "multichain-cli chaintest grant " + walletAddressNode2 + " " + streamName + ".write";
exec(command4, function (error, stdout, stderr) {
    console.log(command4);
    console.log(stdout);
});
