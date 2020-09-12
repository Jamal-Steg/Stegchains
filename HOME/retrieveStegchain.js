var fs = require("fs");
const expandTilde = require('expand-tilde');
var fabricStegchain = fs.readFileSync(expandTilde('~/dataOutput/stegChainFabric')).toString('utf-8');
var multiChainStegchain = fs.readFileSync(expandTilde('~/dataOutput/stegChainMulti')).toString('utf-8');

/*this function allows for Stegchain retrieval and alternatively combines both of the text files which contain
the letters which have been sliced from a data field. */
function combineStrings(fabricStegchain, multiChainStegchain) {
  var payload = "";
  fabricStegchain = Array.from(fabricStegchain);
  multiChainStegchain = Array.from(multiChainStegchain);
  while (fabricStegchain.length > 0 || multiChainStegchain.length > 0) {
    if (fabricStegchain.length > 0)
    payload += fabricStegchain.splice(0, 1);
    if (multiChainStegchain.length > 0)
    payload += multiChainStegchain.splice(0, 1);
  }
  return payload;
}

var secretPayload = combineStrings(fabricStegchain, multiChainStegchain);
console.log(secretPayload);
