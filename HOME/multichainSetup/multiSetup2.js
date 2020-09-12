var exec = require('child_process').exec;
const expandTilde=require('expand-tilde');

//starts up the first node created
var command1 = 'cd ' +expandTilde('~;')+'multichaind chaintest -daemon';
exec(command1, function(error, stdout, stderr) {
console.log(command1);
console.log(stdout);
});
