var exec = require('child_process').exec;
var fs = require('fs');
const expandTilde=require('expand-tilde');
var streamName = fs.readFileSync(expandTilde('~/dataOutput/streamName'), 'utf8');
streamName = streamName.replace(/(\r\n|\n|\r)/gm, ""); // this removes any data not needed

// changes directory and opens the cli on the chaintest node to display all items within a stream
var command = 'cd ' +expandTilde('~;')+'multichain-cli -datadir=.multichain chaintest liststreamitems '+streamName+' false 999999 | tee '+expandTilde('~/dataOutput/chainData');
exec(command, function(error, stdout, stderr) {
});