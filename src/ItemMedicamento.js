"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemMedicamento = /** @class */ (function () {
    function ItemMedicamento(quantidadeEstoque, lote, validade) {
        this.lote = lote;
        this.quantidadeEstoque = quantidadeEstoque;
        this.validade = validade;
    }
    ItemMedicamento.prototype.getQuantidadeEstoque = function () {
        return this.quantidadeEstoque;
    };
    ItemMedicamento.prototype.getLote = function () {
        return this.lote;
    };
    ItemMedicamento.prototype.getValidade = function () {
        return this.validade;
    };
    return ItemMedicamento;
}());
exports.ItemMedicamento = ItemMedicamento;
