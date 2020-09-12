const fs = require("fs");
const expandTilde = require('expand-tilde');
const port = new console.Console(fs.createWriteStream(expandTilde('~/dataOutput/port')));
const rpcPort = new console.Console(fs.createWriteStream(expandTilde('~/dataOutput/rpcPort')));
const streamName = new console.Console(fs.createWriteStream(expandTilde('~/dataOutput/streamName')));
var str;
var str2;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// gets user input for port numbers and stream name 
rl.question("Input port number (e.g. 10255)", function (portNo) {

    str = `${portNo}`;


    rl.question("Input rpcPort number (e.g. 10254)", function (rpcPort) {

        str2 = `${rpcPort}`;

        rl.question("Input stream name (e.g. stream22)", function (streamName) {

            str3 = `${streamName}`;
            rl.close();
        });
    });
});

//writing input data to text files to be called upon later
rl.on("close", function () {
    port.log("port=" + str);
    rpcPort.log("rpcport=" + str2);
    streamName.log(str3);
    console.log("port=" + str);
    console.log("rpcport=" + str2);
    console.log("stream name=" + str3);
    process.exit(0);
});