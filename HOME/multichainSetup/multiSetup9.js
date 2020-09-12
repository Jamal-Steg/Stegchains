var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde=require('expand-tilde');
var walletAddressNode2 = fs.readFileSync(expandTilde('~/dataOutput/walletAddressNode2'), 'utf-8');

//grants the connecting permissions
var command = 'cd ' +expandTilde('~;')+'multichain-cli chaintest grant '+walletAddressNode2+' connect';
exec(command, function(error, stdout, stderr) {
console.log(command);
console.log(stdout);
});