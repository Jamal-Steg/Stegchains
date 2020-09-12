var fs = require('fs')
const expandTilde=require('expand-tilde');
var port = fs.readFileSync(expandTilde('~/dataOutput/port'), 'utf-8');
var rpcPort = fs.readFileSync(expandTilde('~/dataOutput/rpcPort'), 'utf-8');

//writes the port and rpcPort details to a config file
fs.createWriteStream(expandTilde('~/.multichain-other/multichain.conf')).write(port+rpcPort);