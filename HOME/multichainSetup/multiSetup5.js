var fs = require('fs');
const expandTilde=require('expand-tilde');
var array = fs.readFileSync(expandTilde('~/dataOutput/nodeAddress'), 'utf8');
array = JSON.parse(array);
var node = array.nodeaddress;

//outputs the node address for the first node
fs.writeFile(expandTilde('~/dataOutput/newNodeAddress'), node, function(err){
    if (err){
        return console.log(err);
    }
    console.log(node);
});