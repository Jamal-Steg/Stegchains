/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const expandTilde = require('expand-tilde');
const contents = fs.readFileSync(expandTilde('~/dataOutput/secretBlock1'), 'utf8');
var count = 1;

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

async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('fabcar');

        /*the for loop uses the secretBlock file to create redundant data based on the secret letter
        the if loop is used to detect if a space has been inserted in the text
        the else loop is used for standard text */
        for (let count = 0; count < contents.length - 1; count++) {

            if (contents.substr(count, 1) == " ") {
                var rndOwnerName = space[Math.floor(Math.random() * space.length)];
                console.log(rndOwnerName);
                await contract.submitTransaction('createCar', count, brands[Math.floor(Math.random() * brands.length)], rndOwnerName);

            }
            else {
                var rndOwnerName = eval(contents.substr(count, 1))[Math.floor(Math.random() * eval(contents.substr(count, 1)).length)];
                console.log(rndOwnerName);
                await contract.submitTransaction('createCar', count, brands[Math.floor(Math.random() * brands.length)], rndOwnerName);
            }
        }

        console.log('Transaction has been submitted');

        // Disconnect from the gateway.
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}
main();