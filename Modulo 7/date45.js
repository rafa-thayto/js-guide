'use strict';
/*
* 
* Date
* Conhecendo os métodos do objeto Date
* Getts e Sets do objeto Date
*
*/
var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
/**
 * 
 * @param {int} month 
 * @return
 */
function translate(month) {
    month--;
    console.log(month);
    let mes;
    switch (month) {
        case 0:
        case '0':
            mes = months[0];
        case 1:
        case '1':
            mes = months[1];
        case 2:
        case '2':
            mes = months[2];
        case 3:
        case '3':
            mes = months[3];
        case 4:
        case '4':
            mes = months[4];
        case 5:
        case '5':
            mes = months[5];
        case 6:
        case '6':
            mes = months[6];
        case 7:
        case '7':
            mes = months[7];
        case 8:
        case '8':
            mes = months[8];
        case 9:
        case '0':
            mes = months[9];
        case 10:
        case '10':
            mes = months[10];
        case 11:
        case '11':
            mes = months[11];
    }
    return `${mes}`
}

let data = new Date(),
    data2 = new Date(3600000000040),
    data3 = new Date('jun 15/2017 07:20:30'),
    data4 = new Date('2016-10-02');;

console.log('data 1: ' + data);
console.log('data 2: ' + data2);
console.log('data 3: ' + data3);
console.log('data 4: ' + data4);
console.log('Date: ' + data.getDate());
console.log('Date: ' + data.setMonth(0));
console.log(translate(2));
console.log('Date: ' + months[data.getMonth()]);



