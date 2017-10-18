'use strict';
/*
* 
* Date
* Conhecendo os métodos do objeto Date
* 
*
*/

// Instanciando o objeto Date()
// O conntrutor vazio do objeto date pega o horário do seu computador
let data = new Date(),
    data2 = new Date(3600000000040),
    data3 = new Date('jun 15/2017 07:20:30'),
    data4 = new Date('2016-10-02');;

// Sintaxe new Date(data_no_formato_string)
/*
dd         -> dia do mês de 01 a 31
MM         -> mês do ano de 01 a 12
MMM        -> nome completo do mês
aaaa       -> ano com quatro dígitos
HH:min:seg -> horas, minutos e segundos
        **E pode ser**
"MM-dd-aaaa hh:min:seg"
"aaaa/MM/dd hh:min:seg"
"MM/dd/aaaa hh:min:seg"
"MMM dd, aaaa hh:min:seg"
"MMMM dd, aaaa hh:min:seg"

ABREVIATURA DOS MESES
    Jan     Jul
    Feb     Aug
    Mar     Sep
    Apr     Oct
    May     Nov
    Jun     Dec
*/


console.log('data 1: ' + data);
console.log('data 2: ' + data2);
console.log('data 3: ' + data3);
console.log('data 4: ' + data4);
