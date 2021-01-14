"use strict";
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.ObterEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.ObterListaDeCarrosDisponiveis = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
