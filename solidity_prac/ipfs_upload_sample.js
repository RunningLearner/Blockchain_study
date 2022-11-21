const ipfsClient = require("ipfs-http-client");
const fs = require("fs");

const ipfs = ipfsClient.create("http://127.0.0.1:5001");

async function main() {
  const file = fs.readFileSync("./text.txt");
  let rst = await ipfs.add(file);
  console.log(rst);
}
main();
