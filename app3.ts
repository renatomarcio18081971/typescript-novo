import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('volkswagen', 4)
let moto = new Moto("BMW")

moto.Acelerar()
console.log(moto)

carro.Acelerar()
console.log(carro)

let conc = new Concessionaria('end', [])

console.log(conc.fornecerHorarioDeFuncionamento())