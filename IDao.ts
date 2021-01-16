export default interface IDao<T> {
    nomeTabela: string
    incluir(objecto: T): void
    excluir(id: number): void
    obter(id: number): T
    obterTodos(): [T]
}