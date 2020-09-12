var exec = require('child_process').exec;
const expandTilde=require('expand-tilde');

//creating the chain in the default directory
var command = 'cd ' +expandTilde('~;')+'multichain-util create chaintest';
exec(command, function(error, stdout, stderr) {
console.log(command);
console.log(stdout);
});
