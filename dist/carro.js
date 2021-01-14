"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.numeroDePortas = 0;
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.Acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.Parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.VelocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
