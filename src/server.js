import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-Type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Diego",
      email: "d@e.com",
    });

    return res.writeHead(201).end();
  }

  if (method === "PUT" && url === "/users/1") {
    return res.end("Alteração de usuários");
  }

  if (method === "DELETE" && url === "/users/1") {
    return res.end("Exclusão de usuários");
  }

  res.writeHead(404).end("Not Found");
});

server.listen(3333);
