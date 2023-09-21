"use strict";
class Celular {
    constructor() {
        this.nome = '';
        this.marca = '';
        this.modelo = '';
        this.memoria = '';
        this.valor = 0;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getMarca() {
        return this.marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getModelo() {
        return this.modelo;
    }
    setMemoria(memoria) {
        this.memoria = memoria;
    }
    getMemoria() {
        return this.memoria;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
}
class Vendas {
    constructor(produtos) {
        this.produto = [];
        for (let i = 0; i < produtos.length; i++) {
            this.produto.push(produtos[i]);
        }
    }
    somarValor() {
        for (let i = 0; i < this.produto.length; i++) {
            let valorTotal;
            valorTotal = this.produto[i].getValor;
            valorTotal += valorTotal; //valorTotal;
            console.log("Valor total de vendas: " + valorTotal);
        }
    }
}
let celular1 = new Celular();
celular1.setNome('EDGE');
celular1.setMarca('Motorola');
celular1.setModelo('200');
celular1.setMemoria('8GB');
celular1.setValor(1300);
let celular2 = new Celular();
celular2.setNome('Galaxy');
celular2.setMarca('Samsumg');
celular2.setModelo('S21 Fe');
celular2.setMemoria('8GB');
celular2.setValor(1200);
let totalCelular = [];
totalCelular.push(celular1);
totalCelular.push(celular2);
console.log(celular1);
let venda = new Vendas(totalCelular);
venda.somarValor();
