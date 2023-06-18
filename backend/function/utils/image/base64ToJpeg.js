const reservePath = require("./tmpPath");
const fs = require("fs");
const util = require("util");

//change to Promise
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const base64ToJpg = (data) => {
  const researvePath = reservePath();
  const buffer = Buffer.from(data, "base64"); //to binary
  return writeFile(`${researvePath}.jpg`, buffer).then(() =>
    readFile(`${researvePath}.jpg`)
  );
};

module.exports = base64ToJpg;
