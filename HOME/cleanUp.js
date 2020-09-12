//removes the files within the dataOutput folder
var exec = require('child_process').exec;
var command = 'rm -r dataOutput/*';

exec(command, function (error, stdout, stderr) {
    console.log("Files in the dataOutput folder have been removed.");
    console.log(stdout);
});