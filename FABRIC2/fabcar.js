/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');
const fs = require('fs');
class FabCar extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const cars = [
            {
                //color: 'blue',
                //make: 'Toyota',
                // model: 'Supra',
                // owner: 'Tomokoe',
            }
        ];

        for (let i = 0; i < cars.length; i++) {
            cars[i].docType = 'car';
            await ctx.stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
            console.info('Added <--> ', cars[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, carNumber) {
        // get the car from chaincode state
        const carAsBytes = await ctx.stub.getState(carNumber); 
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createCar(ctx, carNumber, model, owner) {
        console.info('============= START : Create Car ===========');
        const car = {
            //color,
            docType: 'car',
            //make,
            model,
            owner,
        };

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    async queryAllCars(ctx) {
        const startKey = '0';
        const endKey = '999';
        const allResults = [];
        for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async querySecret(ctx) {
        const startKey = '0';
        const endKey = '999';
        const allResults = [];
        const payloadSplitter = [];
        for await (const { key, value } of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        var data = Object.keys(allResults).map(e => ({ Key: allResults[e].Key, Record: allResults[e].Record }))
            .sort((a, b) => a.Key - b.Key);

        for (var i = 0; i < data.length; i++) {
            var getRecord = (data[i].Record);
            var recordString = JSON.stringify(getRecord);
            recordString = recordString.slice(-3, -2);
            payloadSplitter.push(recordString);
        }
        const toStr = payloadSplitter.toString();
        const secret = toStr.replace(/[,]/g, "");
        console.info(secret);
        return JSON.stringify(secret);
    }

    async changeCarOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;
        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }

}
module.exports = FabCar;