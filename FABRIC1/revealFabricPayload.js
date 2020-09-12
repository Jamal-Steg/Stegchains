const childProcess = require("child_process");
const fs = require("fs");

//code needed to allow asynchronus functions
function execute(command) {
  return new Promise(function(resolve, reject) {
    childProcess.exec(command, function(error, standardOutput, standardError) {
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
    const enrollAdmin = await execute("node getQuerySecret.js");
  } catch (error) {
    console.error(error.toString());
  }

  try {
    const registerUser = await execute("node appendFabricData.js");
    console.log(registerUser);
  } catch (error) {
    console.error(error.toString());
  }
}
main();