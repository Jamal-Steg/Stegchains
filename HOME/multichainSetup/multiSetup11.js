var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde=require('expand-tilde');

//starts up the second node
var command = 'cd ' +expandTilde('~;')+'multichaind -datadir=.multichain-other chaintest -daemon';
exec(command, function(error, stdout, stderr) {
console.log(command);
console.log(stdout);
});