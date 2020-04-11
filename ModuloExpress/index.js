const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario");

require("./api/produto")(app, "com param!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(saudacao("Jeff"));

app.use((req, res, next) => {
  console.log("Antes...");
  next();
});

app.get("/clientes/relatorio", (req, res) => {
  res.send(
    `Cliente relatiorio: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  res.send(req.body);

  /*   let corpo = "";
  req.on("data", function (parte) {
    corpo += parte;
  });
  req.on("end", function () {
    res.send(corpo);
  }); */
});

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado`);
});

app.get("/", (req, res, next) => {
  console.log("Durante");
  res.json({
    data: [
      { id: 1, nome: "jeff", position: 1 },
      { id: 23, nome: "lizz", position: 2 },
      { id: 15, nome: "rafa", position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });
  next();
  /*   res.json({
    nome: "IPad 32Gb",
    price: 1990.99,
    discount: 0.12
  }); */

  //res.send("hello word");
});
app.use((req, res) => {
  console.log("Depois...");
});

app.listen(3000, () => {
  console.log("Servidor rodando...");
});
