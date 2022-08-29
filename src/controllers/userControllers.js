const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Cria um usuario
exports.postUser = async (req, res) => {
  const { cpf, name, DtNascimento, password } = req.body;
  try {
    const user = await User.findOne({ cpf: cpf }); //verificar se usuário já existe
    //verifica se o usuario existe
    if (!user) {
      return res.status(403).send({
        message: "Usuário já cadastrado no sistema",
      });
    }
    //criar hash senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    //criar usuário
    const newUser = new User({
      cpf,
      name,
      DtNascimento,
      password: passwordHash,
    });
    await newUser.save();
    res
      .status(201)
      .send({ message: "Usuário criado com sucesso", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .send({ error: error.message, message: "erro na requisição" });
  }
};
//Logar
exports.login = async (req, res) => {
  const { cpf, password } = req.body;
  try {
    const user = await User.findOne({ cpf: cpf });
    if (!user) {
      //verificar se usuário existe
      return res.status(404).send({ msg: "Usuário não encontrado" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(422).send({ msg: "Falha na autenticação!" });
    }

    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );
    res.status(200).send({
      msg: "Autenticação realizada com sucesso",
      token,
      id: user.id,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Aconteceu um erro no servidor, tente novamente mais tarde!",
      error: error.message,
    });
  }
};


//Busca usuarios por id
exports.userId = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      //verificar se usuário existe
      return res.status(404).send({ msg: "Usuário não encontrado" });
    }
    return res.status(200).send(user);
  } catch (error) {
    return res.status(404).send({
      error: error.message,
      msg: "Usuário não encontrado",
    });
  }
};

//get geral de usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({
      error: error.message,
      messagem: "Não foi possivel buscar os usuários.",
    });
  }
};
