/*
* 
* Math
* Conhecendo os métodos do objeto Math
* Gerando números aleatórios
*
*/

var num = 15,
    str = '15',
    // Converte de String para Number
    con = Number(str),
    txt = num.toString(),
    decimal = 15.24123,
    val = new Number(20);
    ;

// console.log('valor = ' + num + ' tipo = ' + typeof num);
// console.log('valor = ' + txt + ' tipo = ' + typeof txt);
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof con);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
console.log(decimal);
// Diz a quantidade de casas decimais
console.log('fixed = ' + decimal.toFixed(2));
// Retorna quantos números vocÊ quer ter
console.log('precision = ' +decimal.toPrecision(3));
console.log('exponencial = ' + decimal.toExponential(4));

// Retorna o tipo primitivo
// console.log(val.valueOf());
// console.log(val);
