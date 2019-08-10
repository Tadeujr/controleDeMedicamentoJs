"use strict";
exports.__esModule = true;
var Medicamento = /** @class */ (function () {
    function Medicamento(nome, quantidade, lote, validade) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.lote = lote;
        this.validade = validade;
    }
    Medicamento.prototype.getName = function () {
        return this.nome;
    };
    Medicamento.prototype.getLote = function () {
        return this.lote;
    };
    Medicamento.prototype.getValidade = function () {
        return this.validade;
    };
    Medicamento.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    return Medicamento;
}());
exports["default"] = Medicamento;
