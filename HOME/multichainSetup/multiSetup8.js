var fs = require('fs');
const expandTilde=require('expand-tilde');
var walletAddressNode2 = fs.readFileSync(expandTilde('~/dataOutput/walletAddressNode2'), 'utf-8');
walletAddressNode2 = walletAddressNode2.replace(/[^\w\s]/gi, "");
walletAddressNode2 = walletAddressNode2.replace(/ /g, "");
walletAddressNode2 = walletAddressNode2.replace(/(\r\n|\n|\r)/gm, "");
console.log(walletAddressNode2);

//reads the wallet address file of the second node and removes all unneeded data from the file
fs.writeFile(expandTilde('~/dataOutput/walletAddressNode2'), walletAddressNode2, function (err){
   if (err) return console.log(err);
 });