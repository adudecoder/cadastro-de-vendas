export class Carteira{
    id: number
    valor: number
    caixa: string
    descricao: string
    data_valor: string
    nome: string
    quantidade: number
    telefone: string
    
    constructor(id?: number, valor?: number, caixa?:string, descricao?: string, data_valor?: string, nome?: string, quantidade?: number, telefone?: string){
        this.id = id
        this.valor = valor
        this.caixa = caixa
        this.descricao = descricao
        this.data_valor = data_valor
        this.nome = nome
        this.quantidade = quantidade
        this.telefone = telefone
    }
}