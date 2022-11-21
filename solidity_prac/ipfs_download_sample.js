const IpfsClient = require("ipfs-http-client");

const ipfs = IpfsClient.create("http://127.0.0.1:5001");

const main = async () => {
  const chunks = [];
  const path = "QmQbDNnpXayKZKWE9qP3nq8EdfqwR5R52v9AMabJJ8Fjc3";
  for await (const chunk of ipfs.cat(path)) {
    chunks.push(chunk);
  }

  console.log(new TextDecoder("utf-8").decode(chunks[0]));
};

main();
