//config inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

//forma de ler JSON / middlewares
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

//Configuração do cors
app.use(cors());
app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Acces-Control-Allow-Header",
    "Origin, X-Requrested-With, Content-Type , Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }
  next();
});

//rotas da api
const usersRoutes = require("./src/routes/usersRoutes");

//Rotas
app.use("/user", usersRoutes);

//Tratamento para quando a rota não existe
app.use((req, res, next) => {
  res.status(404).send({
    mensagem: "Rota nao encontrada",
  });
  next();
});

const PORT = process.env.PORT || 3335;
mongoose.connect("mongodb://localhost:27017/");
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT} 🚀`));
