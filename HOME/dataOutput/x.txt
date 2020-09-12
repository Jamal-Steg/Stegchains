var fs = require('fs')
const expandTilde=require('expand-tilde');
var text = fs.readFileSync(expandTilde('~/dataOutput/stegChainFabric'), 'utf-8');
text = text.replace(/"/g,"");
console.log(text);

//removes unneeded characters from the stegchain
fs.writeFile(expandTilde('~/dataOutput/stegChainFabric'), text, function (err){
   if (err) return console.log(err);
 });