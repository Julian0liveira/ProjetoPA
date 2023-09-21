class Celular{
    nome:string = '';
    marca:string = '';
    modelo:string = '';
    memoria:string = '';
    valor:number = 0;

    setNome(nome:string){
        this.nome = nome;
    }
    getNome(){
        return this.nome 
    }

    setMarca(marca:string){
        this.marca = marca;
    }
    getMarca(){
        return this.marca;
    }
    
    setModelo(modelo:string){
        this.modelo = modelo;
    }
    getModelo(){
        return this.modelo;
    }

    setMemoria(memoria:string){
        this.memoria = memoria;
    }
    getMemoria(){
        return this.memoria;
    }

    setValor(valor:number){
        this.valor = valor;
    }
    getValor(){
        return this.valor;
    }
}

class Vendas{
    produto:Celular[] = [];
    constructor(produtos:Celular[]){
        for(let i=0; i< produtos.length; i++){
            this.produto.push(produtos[i]);
        }
    }

    somarValor(){
        for(let i=0; i< this.produto.length; i++){
            let valorTotal:any; //*************** 
            valorTotal = this.produto[i].getValor;
            valorTotal += valorTotal; //valorTotal;
            console.log("Valor total de vendas: "+valorTotal);
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

let totalCelular:Celular[] = [];
totalCelular.push(celular1);
totalCelular.push(celular2);

console.log(celular1);



let venda = new Vendas(totalCelular);
venda.somarValor();