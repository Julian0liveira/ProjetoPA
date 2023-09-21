"use strict";
function somar(valor1, valor2) {
    return valor1 + valor2;
}
function subtrair(valor1, valor2) {
    return valor1 - valor2;
}
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}
function dividir(valor1, valor2) {
    return valor1 / valor2;
}
function calculadora(argumento1, argumento2, funcao) {
    return funcao(argumento1, argumento2);
}
alert("Resultado: " + (calculadora(100, 200, somar)));
