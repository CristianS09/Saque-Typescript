class Banco {
    nome: string;
    dinheiro: number;
    constructor(nome: string, dinheiro: number) {
        this.nome = nome;
        this.dinheiro = dinheiro;
    }

    sacar(sac: number) {
        if (sac > this.dinheiro) {
            console.log(`Desculpe ${this.nome}, mas você não tem saldo.`)
        }
        else {
            console.log(`${this.nome}, você sacou ${sac} R$, seu saldo agora é ${this.dinheiro - sac}`)
        }
    }
}

const obj = new Banco('', 1050);
obj.sacar(500)