function somar(valor1:number,valor2:number):number{
    return valor1 + valor2;
}

function subtrair(valor1:number,valor2:number):number{
    return valor1 - valor2;
}

function multiplicar(valor1:number,valor2:number):number{
    return valor1 * valor2;
}

function dividir(valor1:number,valor2:number):number{
    return valor1 / valor2;
}

function calculadora(argumento1:number,argumento2:number,funcao:Function) {
    return funcao(argumento1,argumento2);    
}

alert("Resultado: "+(calculadora(100,200,somar)));