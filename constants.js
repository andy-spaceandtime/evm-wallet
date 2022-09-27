require("dotenv").config();

const NETWORK = process.env.DEPLOY_NETWORK;

const RPC_ENDPOINT =
  "https://" + NETWORK + ".infura.io/v3/" + process.env.INFURA_PROJECT_ID;

module.exports = {
  RPC_ENDPOINT,
  NETWORK,
};
