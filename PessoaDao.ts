import IDao from "./IDao";
import Pessoa from "./Pessoa";

export default class PessoaDao implements IDao{

    nomeTabela: string = 'tb_pessoa';

    public incluir(objecto: Pessoa): void {
        console.log('incluir')
    }
    
    public excluir(id: number): void {
        console.log('excluir')
    }
    
    public obter(id: number) {
        console.log('obter')
    }
    
    public obterTodos(): [any] {
        return [new Array]
    }

}