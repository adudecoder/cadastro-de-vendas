export class Carteira{
    id: number;
    valor: number;
    caixa: string;
    descricao: string;
    data_valor: string;
    nome: string;
    quantidade: number;
    telefone: string;
    rua: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    fornecedores: string;
    
    constructor(id?: number, valor?: number, caixa?:string, descricao?: string, data_valor?: string, nome?: string, quantidade?: number, telefone?: string, rua?: string, bairro?: string, cidade?: string, uf?: string, cep?: string, fornecedores?: string){
        this.id = id
        this.valor = valor
        this.caixa = caixa
        this.descricao = descricao
        this.data_valor = data_valor
        this.nome = nome
        this.quantidade = quantidade
        this.telefone = telefone
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.uf = uf
        this.cep = cep
        this.fornecedores = fornecedores
    }
}