/*
* 
* Arrays
* Principais Métodos do Objeto Array
*
*/

// var vetor = [1, 2, 'a', 3, 4, 5, 'Rafael', 'a', 777];
var vetor = [2, 4, 5, 12 , 7, 10];
var resultado1, resultado2;
var txt = '';

var par = function(elemento, indice, objeto) {
    return (elemento % 2 == 0);
}
var impar = function(elemento, indice, objeto) {
    return (elemento % 2 != 0);
}
var forEach = function(elemento, indice, objeto) {
    txt += 'vetor[' + indice + '] = ' + elemento + '\n';
}
var map = function(elemento, indice, objeto) {
    if(elemento > 9)
        return (elemento * 2);
    else
        return (elemento);
}

console.log(vetor);
// Ele varre o vetor e modifica o vetor de acordo com a regra
// resultado1 = vetor.map(par);
/*--------------------------------------------------------------*/
// some é como se fosse um 'ou' ou '||', se tiver 1 elemento
// obedecendo a regra, o resultado é verdadeiro
// resultado1 = vetor.some(par);
/*--------------------------------------------------------------*/
// Foreach varre o vetor e retorna os elementos
// vetor.forEach(forEach);
// console.log(txt);
/*--------------------------------------------------------------*/
// Filter filtra as informações verdadeiras dos arrays,
// retornando elas em um novo vetor
// você filtra os elementos de acordo com a regra que você vai executar
// resultado1 = vetor.filter(par);
// resultado1 = vetor.filter(impar);
/*--------------------------------------------------------------*/

// console.log(vetor);
console.log(resultado1);
// console.log(resultado2);

