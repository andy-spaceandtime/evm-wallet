const Web3 = require("web3");
const { RPC_ENDPOINT } = require("./constants");
const { writeAddressInfoToFile } = require("./io");

// create web3 provider
const web3 = new Web3(new Web3.providers.HttpProvider(RPC_ENDPOINT));

// create new account
const account = web3.eth.accounts.create();

console.log(`address: ${account.address}`);
console.log(`privateKey: ${account.privateKey}`);

// Write address info into file
writeAddressInfoToFile(
  { address: account.address, privateKey: account.privateKey },
  account.address
);
