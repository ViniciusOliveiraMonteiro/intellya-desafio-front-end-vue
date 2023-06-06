const jsonServer = require("json-server");
const express = require("express");
const path = require("path");

const app = express();
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Middleware para autenticação por cabeçalho
server.use((req, res, next) => {
  const { headers } = req;
  const apiKey = headers["x-api-key"];

  // Verifica se o valor do cabeçalho 'x-api-key' é válido
  if (apiKey && apiKey === "70335667-2408-4011-a994-ea3e7042d96f") {
    // Passa para o próximo middleware
    next();
  } else {
    // Retorna um erro de autenticação
    res.status(401).json({ error: "Acesso não autorizado." });
  }
});

app.use("/", middlewares);
app.use("/", server);
app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log(`JSON Server está rodando em http://localhost:${port}`);
});
