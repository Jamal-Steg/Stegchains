var exec = require('child_process').exec;
const expandTilde=require('expand-tilde');

//the second node contains a different directory, port and rpcport, and uses the address output from the first node
var command3 = 'cd ' +expandTilde('~;')+'multichain-cli chaintest getinfo | tee ' + expandTilde('~/dataOutput/nodeAddress');
exec(command3, function(error, stdout, stderr) {
console.log(command3);
console.log(stdout);
});