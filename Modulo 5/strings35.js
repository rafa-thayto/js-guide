/*
* 
* Strings
* Principais Métodos do Objeto Array
*
*/

var str = 'rafael - curso de JavaScript',
    str2 = ' aprenda',
    str3 = ' Passo a',
    str4 = ' Passo';

// Verifica se começa com determinado valor e você pode
// especificar a posicao, caso comece com o que você determinou retorna
// true, se não retorna false
// console.log(str.startsWith('fael',2));
/*-----------------------------------------------------------------------*/
// Verifica se termina com determinado valor e você pode
// especificar a posicao, caso comece com o que você determinou retorna
// true, se não retorna false
// console.log(str.endsWith('cript'));
/*-----------------------------------------------------------------------*/
// Concatena Strings
// console.log(str.concat(str, str2, str3, str4));
/*-----------------------------------------------------------------------*/
// Verifica se duas String são iguais
// return < 0 se a string 1 precede a string2 na ordem alfabética
// return = 0 se a string 1 e a string 2 possuem a mesma ordem alfabética
// return >0 se a string 1 sucede string 2 na ordem alfabética
// console.log(str3.localeCompare(str4));
/*-----------------------------------------------------------------------*/
// Cria um array de substrings
// e você define o caractere separador
// teste caso você esqueça
// console.log(str.split(' '));
/*-----------------------------------------------------------------------*/
// Pega uma parte da string que você escolheu, 
// slice aceita valores negativos, ou seja começar
// de trás para frente
// console.log(str.slice(-10,-2));
// console.log(str.slice(2,10));
// console.log(str.substring(2, 10));
/*-----------------------------------------------------------------------*/
// Transforma tudo em minúsculo
// console.log(str.toLowerCase());
// Transforma tudo em maiúsculo
// console.log(str.toUpperCase());
/*-----------------------------------------------------------------------*/
