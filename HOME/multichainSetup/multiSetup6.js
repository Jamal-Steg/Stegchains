var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde=require('expand-tilde');
var port = fs.readFileSync(expandTilde('~/dataOutput/port'), 'utf8');
var rpcPort = fs.readFileSync(expandTilde('~/dataOutput/rpcPort'), 'utf8');
var nodeAddress = fs.readFileSync(expandTilde('~/dataOutput/newNodeAddress'), 'utf8');

//creates the second node with a different port, rpcport and first node address
var command4 = 'cd ' +expandTilde('~;')+' multichaind -datadir=.multichain-other -'+port+" "+ '-'+rpcPort+" "+nodeAddress+ " -daemon";
command4 = command4.replace(/(\r\n|\n|\r)/gm, "");
console.log(command4);
exec(command4, function(error, stdout, stderr) {
console.log(stdout);
});
