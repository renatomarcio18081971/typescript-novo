export default interface IDao {
    nomeTabela: string
    incluir(objecto: any): void
    excluir(id: number): void
    obter(id: number): any
    obterTodos(): [any]
}