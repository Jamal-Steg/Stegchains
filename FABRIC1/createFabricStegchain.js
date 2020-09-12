const childProcess = require("child_process");

//code used to allow asynchronus functions
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
    const enrollAdmin = await execute("node enrollAdmin.js");
    console.log(enrollAdmin);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const registerUser = await execute("node registerUser.js");
    console.log(registerUser);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const invoke = await execute("node invoke.js");
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const queryAll = await execute("node queryAll.js");
    console.log(queryAll);
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const getBlockchainFabirc = await execute("node getBlockchain.js");
    console.log(getBlockchainFabirc);
  } catch (error) {
    console.error(error.toString());
  }
}
main();