var lineReader = require('line-reader');
var fs = require("fs");
const expandTilde = require('expand-tilde');
var results = [];
var secret;

//a line reader has been created to allow  extraction of the secret payload
//the last letter of the field "name" is sliced and added to an array which displays the payload
lineReader.eachLine(expandTilde('~/dataOutput/chainData'), function (line, last) {
  if (line.includes('Name')) {
    var lastLetter = line.slice(-3, -2);
    var record = lastLetter;
    results.push(record);
    var toStr = results.toString();
    secret = toStr.replace(/[,]/g, "");
  }
  else if (line.includes('STOP')) {
    console.log(secret);
    fs.writeFile(expandTilde('~/dataOutput/stegChainMulti'), secret, function (err) {
      if (err) return console.log(err);
    });
  }
});




