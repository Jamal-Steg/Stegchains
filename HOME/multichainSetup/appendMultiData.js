var fs = require('fs');
const expandTilde = require('expand-tilde');
var array = fs.readFileSync(expandTilde('~/dataOutput/chainData'), 'utf8');
var toSort = [];
array = JSON.parse(array);

//for loop created to extract json data from the blockchain
for (var i = 0; i < array.length; i++) {
  var jsonData = array[i];
  var key = jsonData.keys;
  var record = jsonData.data.json.name;
  var model = jsonData.data.json.model;
  toSort.push({ Key: key, Name: record, Model: model });
}

//sorts the new array as an object and maps relevant fields to the key
var data = Object.keys(toSort).map(e => ({ Key: toSort[e].Key, Name: toSort[e].Name, Model: toSort[e].Model }))
  .sort((a, b) => a.Key - b.Key);

data = JSON.stringify(data, null, "\t"); // formats the document

console.log(data);

//outputs the new data to a text file
fs.writeFile(expandTilde('~/dataOutput/chainData'), data, function (err) {
  if (err) return console.log(err);
});

var logger = fs.createWriteStream(expandTilde('~/dataOutput/chainData'), {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

//appends the word stop to the end of the blockchain, for use later on
logger.write('STOP'); 