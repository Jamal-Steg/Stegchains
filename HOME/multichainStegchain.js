const childProcess = require("child_process");
const expandTilde = require('expand-tilde');

//function needed to allow asynchronus setup of multichain
function execute(command) {
  return new Promise(function (resolve, reject) {
    childProcess.exec(command, function (error, standardOutput, standardError) {
      if (error) {
        reject();
        return;
      }
      if (standardError) {
        reject(standardError);
        return;
      }
      resolve(standardOutput);
    });
  });
}

async function main() {
  try {
    const multiSetup1 = await execute("node " + expandTilde('~/multichainSetup/multiSetup1.js'));
    console.log("*****SETUP 1*****");
    console.log(multiSetup1);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup2 = await execute("node " + expandTilde('~/multichainSetup/multiSetup2.js'));
    console.log("*****SETUP 2*****");
    console.log(multiSetup2);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup3 = await execute("node " + expandTilde('~/multichainSetup/multiSetup3.js'));
    console.log("*****SETUP 3*****");
    console.log(multiSetup3);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup4 = await execute("node " + expandTilde('~/multichainSetup/multiSetup4.js'));
    console.log("*****SETUP 4*****");
    console.log(multiSetup4);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup5 = await execute("node " + expandTilde('~/multichainSetup/multiSetup5.js'));
    console.log("*****SETUP 5*****");
    console.log(multiSetup5);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup6 = await execute("node " + expandTilde('~/multichainSetup/multiSetup6.js'));
    console.log("*****SETUP 6*****");
    console.log(multiSetup6);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup7 = await execute("node " + expandTilde('~/multichainSetup/multiSetup7.js'));
    console.log("*****SETUP 7*****");
    console.log(multiSetup7);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup8 = await execute("node " + expandTilde('~/multichainSetup/multiSetup8.js'));
    console.log("*****SETUP 8*****");
    console.log(multiSetup8);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup9 = await execute("node " + expandTilde('~/multichainSetup/multiSetup9.js'));
    console.log("*****SETUP 9*****");
    console.log(multiSetup9);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup10 = await execute("node " + expandTilde('~/multichainSetup/multiSetup10.js'));
    console.log("*****SETUP 10*****");
    console.log(multiSetup10);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup11 = await execute("node " + expandTilde('~/multichainSetup/multiSetup11.js'));
    console.log("*****SETUP 11*****");
    console.log(multiSetup11);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup12 = await execute("node " + expandTilde('~/multichainSetup/multiSetup12.js'));
    console.log("*****SETUP 12*****");
    console.log(multiSetup12);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup13 = await execute("node " + expandTilde('~/multichainSetup/multiSetup13.js'));
    console.log("*****SETUP 13*****");
    console.log(multiSetup13);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup14 = await execute("node " + expandTilde('~/multichainSetup/multiSetup14.js'));
    console.log("*****SETUP 14*****");
    console.log(multiSetup14);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup15 = await execute("node " + expandTilde('~/multichainSetup/multiSetup15.js'));
    console.log("*****SETUP 15*****");
    console.log(multiSetup15);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const multiSetup16 = await execute("node " + expandTilde('~/multichainSetup/multiSetup16.js'));
    console.log("*****SETUP 16*****");
    console.log(multiSetup16);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const invokeMulti = await execute("node " + expandTilde('~/multichainSetup/invokeMulti.js'));
    console.log("*****INVOKING MULTICHAIN DATA*****");
    console.log(invokeMulti);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const getChainData = await execute("node " + expandTilde('~/multichainSetup/getChainData.js'));
    console.log("*****GETTING CHAIN DATA*****");
    console.log(getChainData);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const appendMultiData = await execute("node " + expandTilde('~/multichainSetup/appendMultiData.js'));
    console.log("*****APPENDING CHAIN DATA*****");
    console.log(appendMultiData);
  } catch (error) {
    console.error(error.toString());
  }
}

main();