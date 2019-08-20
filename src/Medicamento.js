"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medicamento = /** @class */ (function () {
    function Medicamento(nomeMedicamento, principioAtivo) {
        this.nomeMedicamento = nomeMedicamento;
        this.principioAtivo = principioAtivo;
    }
    Medicamento.prototype.getnomeMedicamento = function () {
        return this.nomeMedicamento;
    };
    Medicamento.prototype.getPrincipioAtivo = function () {
        return this.principioAtivo;
    };
    return Medicamento;
}());
exports.Medicamento = Medicamento;
