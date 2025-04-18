import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("Listagem de usuários");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Criação de usuários");
  }

  if (method === "PUT" && url === "/users/1") {
    return res.end("Alteração de usuários");
  }

  if (method === "DELETE" && url === "/users/1") {
    return res.end("Exclusão de usuários");
  }

  res.end("Hello World!");
});

server.listen(3333);
