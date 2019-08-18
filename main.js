"use strict";
exports.__esModule = true;
var Medicamento_1 = require("./Medicamento");
var newUser = new Medicamento_1.Medicamento("Doril", "Dipirona Sódica");
console.log(newUser.getPrincipioAtivo() + "\n" + newUser.getnomeMedicamento());
