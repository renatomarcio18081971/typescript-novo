import Concessionaria from "./Concessionaria";
import IDao from "./IDao";

export default class ConcessionariaDao implements IDao<Concessionaria> {
    
    nomeTabela: string = 'tb_concessionaria';

    public incluir(objecto: Concessionaria): void {
        console.log('incluir')
    }

    public excluir(id: number): void {
        console.log('excluir')
    }

    public obter(id: number) {
        return new Concessionaria('', [])
    }

    public obterTodos(): [Concessionaria] {
        return [new Concessionaria('', [])]
    }
    
}