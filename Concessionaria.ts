import Carro from './Carro'
import { IConcessionaria } from './IConcessionaria'

export default class Concessionaria implements IConcessionaria {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string {
        return '8:00h às 18:00h'
    }

    public ObterEndereco(): string {
        return this.endereco;
    }

    public ObterListaDeCarrosDisponiveis(): Carro[] {
        return this.listaDeCarros;
    }
}
