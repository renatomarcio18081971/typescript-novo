export default class Veiculo {
    protected modelo: string = ''
    protected velocidade: number = 0

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