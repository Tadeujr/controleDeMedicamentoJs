"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegistroDeRetirada = /** @class */ (function () {
    function RegistroDeRetirada(quantidadeRetirada, data, hora) {
        this.quantidadeRetirada = quantidadeRetirada;
        this.data = data;
        this.hora = hora;
    }
    RegistroDeRetirada.prototype.getQuantidadeRetirada = function () {
        return this.quantidadeRetirada;
    };
    RegistroDeRetirada.prototype.getData = function () {
        return this.data;
    };
    Object.defineProperty(RegistroDeRetirada.prototype, "getHora", {
        get: function () {
            return this.getHora;
        },
        enumerable: true,
        configurable: true
    });
    return RegistroDeRetirada;
}());
exports.RegistroDeRetirada = RegistroDeRetirada;
