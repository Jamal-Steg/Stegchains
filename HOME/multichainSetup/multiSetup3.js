var exec = require('child_process').exec;
const expandTilde=require('expand-tilde');

//creates another directory for a second node
var command2 = 'cd ' +expandTilde('~;')+'mkdir .multichain-other';
exec(command2, function(error, stdout, stderr) {
console.log(command2);
console.log(stdout);
});
