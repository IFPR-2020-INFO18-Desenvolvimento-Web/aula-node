const http = require("http");

// const hostname = "127.0.0.1";
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const nome = "Diego Stiehl";
  res.end(`Ola! Seja bem vindo, ${nome}.`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
