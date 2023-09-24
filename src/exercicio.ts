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
    memoria:number[] = [];
    produto:Celular[] = [];
    valorTotal:number = 0;
    constructor(produtos:Celular[]){
        for(let i=0; i< produtos.length; i++){
            this.produto.push(produtos[i]);
        }
    }

    somarValor(){
        for(let i=0; i< this.produto.length; i++){
            this.valorTotal = this.valorTotal + this.produto[i].getValor();
        }
        this.memoria.push(this.valorTotal);
        console.log("Valor total de vendas: " + this.valorTotal);
    }

    exibirMemoria(){
        //let exibir = 0;
        //for(let i=0; i < this.memoria.length; i++){
        for(let value in this.memoria){
            //exibir = this.memoria[i];
            //console.log("Valor do indice "+i+": "+exibir);
            console.log("Valor do indice "+value+": "+this.memoria[value]);
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
celular2.setValor(150);

let totalCelular:Celular[] = [];
totalCelular.push(celular1);
totalCelular.push(celular2);

//console.log(celular1);



let venda = new Vendas(totalCelular);
venda.somarValor();
//3venda.exibirMemoria();

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

totalCelular.push(celular3);
totalCelular.push(celular4)

venda.somarValor();
venda.exibirMemoria();
/*let totalCelular2:Celular[] = [];
totalCelular2.push(celular3);
totalCelular2.push(celular4);*/

/*let venda2 = new Vendas(totalCelular2);
venda2.somarValor();
venda2.exibirMemoria();*/
