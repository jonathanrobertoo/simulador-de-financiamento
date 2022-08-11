export class Parcela {
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numero,valor, juros, amortizacao,saldo){
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = saldo;
    }

    getSaldo() {
        return this.#saldo;
    }
    getDadosFormatados() {
        const dados = [];
        dados.push(this.#numero);
        dados.push(this.#valor.toLocalString('pt-Br',{style: 'currency', currency: 'BRL'}));
        dados.push(this.#amortizacao.toLocalString('pt-Br',{style: 'currency', currency: 'BRL'}));
        dados.push(this.#juros.toLocalString('pt-Br',{style: 'currency', currency: 'BRL'}));
        dados.push(this.#saldo.toLocalString('pt-Br',{style: 'currency', currency: 'BRL'}));
    }

}