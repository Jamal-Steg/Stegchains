var exec = require('child_process').exec;
const expandTilde=require('expand-tilde');

//prints the second node address to a new text file
var command3 = 'cd ' +expandTilde('~;')+'multichain-cli -datadir=.multichain-other chaintest getaddresses| tee ' + expandTilde('~/dataOutput/walletAddressNode2');
exec(command3, function(error, stdout, stderr) {
console.log(command3);
console.log(stdout);
});