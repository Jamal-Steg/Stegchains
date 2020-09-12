var exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');
const expandTilde = require('expand-tilde');
const contents = fs.readFileSync(expandTilde('~/dataOutput/secretBlock2'), 'utf8');
var streamName = fs.readFileSync(expandTilde('~/dataOutput/streamName'), 'utf8');
streamName = streamName.replace(/(\r\n|\n|\r)/gm, ""); //removes all unneeded data

//redundant data used to store the secret payload
var a = ["Alexa", "Anna", "Mustafa"];
var b = ["Jacob", "Caleb", "Zainab"];
var c = ["Isaac", "Eric", "Alec"];
var d = ["David", "Eckhard", "Raymond"];
var e = ["Grace", "Zoe", "Claire"];
var f = ["Yosef", "Saif", "Jeff"];
var g = ["Wolfgang", "Irving", "Greg"];
var h = ["Isaiah", "Sarah", "Elijah"];
var i = ["Dimitri", "Eloi", "Kenji"];
var j = ["Raj", "Tej", "Suraj"];
var k = ["Kendrick", "Jack", "Mark"];
var l = ["Samuel", "Daniel", "Michael"];
var m = ["Liam", "Adam", "William"];
var n = ["Ethan", "Logan", "Mason"];
var o = ["Diego", "Leo", "Santiago"];
var p = ["Phillip", "Bishop", "Tripp"];
var q = ["Tariq", "Sadiq", "Khaliq"];
var r = ["Viktor", "Omar", "Victor"];
var s = ["James", "Yahnks", "Junes"];
var t = ["Wyatt", "Ankeet", "Violet"];
var u = ["Edu", "Isamu", "Kweku"];
var v = ["Aarav", "Zev", "Yakov"];
var w = ["Matthew", "Andrew", "Drew"];
var x = ["Alex", "Max", "Jax"];
var y = ["Avery", "Ashley", "Bailey"];
var z = ["Cruz", "Liz", "Chaz"];
var brands = ["Acura", "Alfa Romeo", "AM General", "AMC", "Aston Martin", "Audi", "Bentley", "BMW", "Bricklin", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daewoo", "Datsun", "Dodge", "Eagle", "Ferrari", "Fiat", "Ford", "Geo", "GMC", "Honda", "HUMMER", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus", "Lincoln", "Lamborghini", "Lotus", "Maserati", "Mazda", "Mercedes-Benz", "Mercury", "MG", "MINI", "Mitsubishi", "Nissan", "Oldsmobile", "Plymouth", "Pontiac", "Porsche", "RAM", "Renault", "Rolls Royce", "Saab", "Saturn", "Scion", "Shelby", "Smart", "Subaru", "Suzuki", "Toyota", "Triumph", "Volkswagen", "Volvo"];
var space = ["Alexa ", "Anna ", "Mustafa ", "Aarav ", "Zev ", "Yakov ", "Diego ", "Leo ", "Santiago ", "Kendrick ", "Jack ", "Mark ", "David ", "Eckhard ", "Raymond "];

/*the for loop uses the secretBlock file to create redundant data based on the secret letter
the if loop is used to detect if a space has been inserted in the text
the else loop is used for standard text */
for (let count = 0; count < contents.length - 1; count++) {
  if (contents.substr(count, 1) == " ") {
    var rndOwnerName = space[Math.floor(Math.random() * space.length)];
    var rndCarBrand = brands[Math.floor(Math.random() * brands.length)];
    var command1 = "multichain-cli -datadir=.multichain chaintest publish " + streamName + " " + count + " '{\"json\":{\"model\":" + "\"" + rndCarBrand + "\"" + ",\"name\":" + "\"" + rndOwnerName + "\"}}'";
    console.log(rndCarBrand, rndOwnerName);
    exec(command1, function (error, stdout, stderr) {
    });
  }
  else {
    var rndOwnerName = eval(contents.substr(count, 1))[Math.floor(Math.random() * eval(contents.substr(count, 1)).length)];
    var rndCarBrand = brands[Math.floor(Math.random() * brands.length)];
    var command1 = "multichain-cli -datadir=.multichain chaintest publish " + streamName + " " + count + " '{\"json\":{\"model\":" + "\"" + rndCarBrand + "\"" + ",\"name\":" + "\"" + rndOwnerName + "\"}}'";
    console.log(rndCarBrand + ", " + rndOwnerName);
    exec(command1, function (error, stdout, stderr) {
    });
  }
}