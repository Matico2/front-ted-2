export default class Produto {
    id: number | null;
    nome: string;
    valor: number;
    quantidade: number;

    constructor(id: number | null, nome: string, valor: number, quantidade: number) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }


    static vazio(): Produto {
        return new Produto(null, "", 0, 0);
    }

}
