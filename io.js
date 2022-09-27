const fs = require("fs");
const path = require("path");
const { NETWORK } = require("./constants");

const writeAddressInfoToFile = (data, fileName) => {
  fs.writeFileSync(
    path.join(__dirname, `wallets/${NETWORK}/${fileName}.json`),
    JSON.stringify(data, null, 2)
  );
};

module.exports = {
  writeAddressInfoToFile,
};
