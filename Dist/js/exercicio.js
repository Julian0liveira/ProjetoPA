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
        this.memoria = [];
        this.produto = [];
        for (let i = 0; i < produtos.length; i++) {
            this.produto.push(produtos[i]);
        }
    }
    somarValor() {
        let valorTotal;
        for (let i = 0; i < this.produto.length; i++) {
            valorTotal += this.produto[i].getValor;
            //valorTotal += valorTotal; //valorTotal;
            console.log("Valor total de vendas: " + valorTotal);
        }
        console.log("Valor total de vendas: " + valorTotal);
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
celular2.setValor(100);
let totalCelular = [];
totalCelular.push(celular1);
totalCelular.push(celular2);
//console.log(celular1);
let venda = new Vendas(totalCelular);
venda.somarValor();
//venda.exibirMemoria();
let celular3 = new Celular();
celular3.setNome('Poco');
celular3.setMarca('Xiaomi');
celular3.setModelo('F5');
celular3.setMemoria('8GB');
celular3.setValor(1000);
let celular4 = new Celular();
celular4.setNome('Galaxy');
celular4.setMarca('Samsumg');
celular4.setModelo('S23+');
celular4.setMemoria('8GB');
celular4.setValor(200);
let totalCelular2 = [];
totalCelular2.push(celular3);
totalCelular2.push(celular4);
let venda2 = new Vendas(totalCelular2);
venda2.somarValor();
//venda2.exibirMemoria();
