var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde=require('expand-tilde');
var streamName = fs.readFileSync(expandTilde('~/dataOutput/streamName'), 'utf8');
streamName = streamName.replace(/(\r\n|\n|\r)/gm, "");

//first node subscribes the stream
var command2 = 'cd ' +expandTilde('~;')+"multichain-cli chaintest subscribe "+streamName;
exec(command2, function (error, stdout, stderr) {
    console.log(command2);
    console.log(stdout);
});
