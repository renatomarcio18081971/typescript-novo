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

let carro = new Carro("fusca", 4)
console.log(carro);
carro.Acelerar();
console.log(carro);