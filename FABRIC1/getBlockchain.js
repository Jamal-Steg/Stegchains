var exec = require('child_process').exec;
const expandTilde=require('expand-tilde');

// runs the quaryAll function and prints the output to a text file
var command1 = 'node queryAll.js | tee ' + expandTilde('~/dataOutput/blockchainFabric');
exec(command1, function(error, stdout, stderr) {
  command1
});