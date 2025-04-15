import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(3333);

console.log("Server running at http://localhost:3000/");
