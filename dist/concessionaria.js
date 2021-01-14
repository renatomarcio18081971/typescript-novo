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
var concessionaria = new Concessionaria('praia formosa', [new Carro('fiat', 4), new Carro('fusca', 3)]);
console.log(concessionaria);
