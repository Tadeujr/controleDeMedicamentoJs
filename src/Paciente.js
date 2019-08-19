"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Paciente = /** @class */ (function (_super) {
    __extends(Paciente, _super);
    function Paciente() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cartaSus = "";
        return _this;
    }
    Object.defineProperty(Paciente.prototype, "cartaSus", {
        get: function () {
            return this._cartaSus;
        },
        set: function (value) {
            this._cartaSus = value;
        },
        enumerable: true,
        configurable: true
    });
    return Paciente;
}(Pessoa_1.Pessoa));
exports.Paciente = Paciente;
