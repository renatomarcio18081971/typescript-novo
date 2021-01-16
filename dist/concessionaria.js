"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return '8:00h às 18:00h';
    };
    Concessionaria.prototype.ObterEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.ObterListaDeCarrosDisponiveis = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
