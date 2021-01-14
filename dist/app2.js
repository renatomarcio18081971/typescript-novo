"use strict";
var cliente = new Pessoa('renato', 'fiat');
var concessionaria = new Concessionaria('praia formosa', [new Carro('fiat', 4), new Carro('fusca', 3)]);
console.log(concessionaria.ObterListaDeCarrosDisponiveis());
concessionaria.ObterListaDeCarrosDisponiveis().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
        console.log('cliente comprou');
    }
});
