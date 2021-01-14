class Concessionaria {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public ObterEndereco(): string {
        return this.endereco;
    }

    public ObterListaDeCarrosDisponiveis(): Carro[] {
        return this.listaDeCarros;
    }
}
