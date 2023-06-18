const os = require("os");
const reservePath = () => {
  const dateMills = new Date().getTime();
  return `${os.tmpdir()}/${dateMills}_img`;
};

module.exports = reservePath;
