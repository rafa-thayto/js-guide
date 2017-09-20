/*
* 
* Arrays
*
*/

// var meuArray = new Array('Flamengo', 'Vasco', 'Santos');
var time = new Array('Flamengo', 'Vasco', 'Santos'),
    dados = Array('Rafael', 15, {rua: 30, quadra: 20, cidade: 'São paulo'}, ['Javascript', 'Java', 'PHP']);

dados[3] = 'NodeJs';
// typeof vê qual o valor do item por exemplo object
// POPULAR é igual incluir valores
// console.log(typeof meuArray);
console.log(time.length);
console.log(time[2]);

time[3] = 'São Paulo';
time[2] = 'Palmeiras';

// Escrever o nome do array printa o array inteiro na tela
console.log(time);
console.log(dados);

console.log(dados[2].rua);
// ou
console.log(dados[2]['cidade']);
// ou
console.log(dados[3][0]);






