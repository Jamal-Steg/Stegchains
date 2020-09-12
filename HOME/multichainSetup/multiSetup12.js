var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde = require('expand-tilde');
var streamName = fs.readFileSync(expandTilde('~/dataOutput/streamName'), 'utf8');
streamName = streamName.replace(/(\r\n|\n|\r)/gm, "");

//creates the new stream with write permissions
var command1 = 'cd ' + expandTilde('~;') + 'multichain-cli chaintest create stream ' + streamName + " \'{\"restrict\":\"write\"}\'";
exec(command1, function (error, stdout, stderr) {
    console.log(command1);
    console.log(stdout);
});
