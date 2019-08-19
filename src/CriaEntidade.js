"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servidor_1 = require("./Servidor");
var Gerente_1 = require("./Gerente");
var CriaEntidade = /** @class */ (function () {
    function CriaEntidade() {
    }
    //Pesquisar try cath do type script
    CriaEntidade.prototype.fabricaEntidades = function (tipoEntidade) {
        var modelo;
        if (tipoEntidade == "servidor") {
            modelo = new Servidor_1.Servidor();
        }
        if (tipoEntidade == "gerente") {
            modelo = new Gerente_1.Gerente();
        }
        return modelo;
    };
    return CriaEntidade;
}());
exports.CriaEntidade = CriaEntidade;
