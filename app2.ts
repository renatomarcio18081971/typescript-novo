class Carro {
    private modelo: string
    private numeroDePortas: number = 0
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public Acelerar(): void {
        this.velocidade += 10
    }

    public Parar(): void {
        this.velocidade = 0
    }

    public VelocidadeAtual(): number {
        return this.velocidade
    }
}

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

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: any): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}


let concessionaria = new Concessionaria('praia formosa', [new Carro('fiat', 4), new Carro('fusca', 3)])
console.log(concessionaria.ObterListaDeCarrosDisponiveis())