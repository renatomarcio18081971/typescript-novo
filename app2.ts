import Pessoa, { valorPadrao as vlor } from './Pessoa'
import Carro  from './Carro'
import Concessionaria from './Concessionaria'

let cliente = new Pessoa('renato', 'fiat')

let concessionaria = new Concessionaria('praia formosa', [new Carro('fiat', 4), new Carro('fusca', 3)])
console.log(concessionaria.ObterListaDeCarrosDisponiveis())

concessionaria.ObterListaDeCarrosDisponiveis().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
        console.log('cliente comprou')
    }
})

console.log(vlor);