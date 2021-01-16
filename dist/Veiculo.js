"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.modelo = '';
        this.velocidade = 0;
    }
    Veiculo.prototype.Acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.Parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.VelocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
