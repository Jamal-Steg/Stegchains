var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde=require('expand-tilde');
var streamName = fs.readFileSync(expandTilde('~/dataOutput/streamName'), 'utf8');
streamName = streamName.replace(/(\r\n|\n|\r)/gm, "");

//subscribes the second node to the stream
var command5 = 'cd ' +expandTilde('~;')+"multichain-cli -datadir=.multichain-other chaintest subscribe "+streamName;
exec(command5, function (error, stdout, stderr) {
    console.log(command5);
    console.log(stdout);
});