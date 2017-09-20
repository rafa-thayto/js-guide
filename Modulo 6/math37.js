/*
* 
* Math
* Conhecendo os métodos do objeto Math
*
*/

var a = -10;

// Retorna o valor absoluto
console.log(Math.abs(a));
/* -------------------------------------------------------------------- */
// Retorna o maior valor entre os passados
// console.log(Math.max(10, 5, 8, 20 , 6));
// Retorna o menor valor entre os passados
// console.log(Math.min(10, 5, 8, 20 , 6));
/* -------------------------------------------------------------------- */
// Arrendonda o parâmetro passado
console.log('Round: ' + Math.round(8.5));
console.log('Round: ' + Math.round(8.6));
console.log('Round: ' + Math.round(8.4));
// Arredonda pra baixo
console.log('Floor: ' + Math.floor(8.6));
console.log('Floor: ' + Math.floor(8.5));
console.log('Floor: ' + Math.floor(8.4));
// Arredonda pra cima
console.log('Ceil: ' + Math.ceil(8.6));
console.log('Ceil: ' + Math.ceil(8.5));
console.log('Ceil: ' + Math.ceil(8.4));
/* -------------------------------------------------------------------- */
// Potencia
console.log('pow: ' + Math.pow(6,2));
// Raíz
console.log('pow: ' + Math.sqrt(6,2));
