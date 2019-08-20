"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Retirada = /** @class */ (function () {
    function Retirada(servidor, cartaoPaciente) {
        this.servidor = servidor;
        this.cartaoPaciente = cartaoPaciente;
    }
    Object.defineProperty(Retirada.prototype, "getServidor", {
        get: function () {
            return this.servidor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Retirada.prototype, "getCartaoPaciente", {
        get: function () {
            return this.cartaoPaciente;
        },
        enumerable: true,
        configurable: true
    });
    return Retirada;
}());
exports.Retirada = Retirada;
