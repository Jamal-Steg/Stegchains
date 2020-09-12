const fs = require("fs");
const expandTilde = require('expand-tilde');
const secretBlock1 = new console.Console(fs.createWriteStream(expandTilde('~/dataOutput/secretBlock1')));
const secretBlock2 = new console.Console(fs.createWriteStream(expandTilde('~/dataOutput/secretBlock2')));
var str;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//gets user secret 
rl.question("What is your Secret ? ", function (secret) {
    str = `${secret}`;
    rl.close();
});

//distributes the secret into 2 separate text files alternatively, allowing them to be used in differnt blockchains
rl.on("close", function () {
    odd = [],
        even = [];
    for (var i = 0; i < str.length; i++) {
        i % 2 === 0
            ? odd.push(str[i])
            : even.push(str[i])
    }
    steg1 = (odd.join(''));
    steg2 = (even.join(''));
    secretBlock1.log(steg1);
    secretBlock2.log(steg2);
    console.log("Secret text block 1:" + steg1);
    console.log("Secret text block 2:" + steg2);
    process.exit(0);
});