var exec = require('child_process').exec;
const expandTilde=require('expand-tilde');

//runs the function querySecret and prints the output to a text file
var command1 = 'node querySecret.js | tee '+expandTilde('~/dataOutput/stegChainFabric');
exec(command1, function(error, stdout, stderr) {
  command1
});

