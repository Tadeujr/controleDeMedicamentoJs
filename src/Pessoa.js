"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._nome = "";
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
