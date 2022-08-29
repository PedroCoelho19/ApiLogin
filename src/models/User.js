const mongoose = require("mongoose");

const User = mongoose.model("User", {
  image: String,
  cpf: String,
  name: String,
  //setor:String,
  DtNascimento: Date,
  admin: Number,
  password: String,
  confirmPassword: String,
  
  

});

module.exports = User;
