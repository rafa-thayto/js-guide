/* Eventos

Eventos inline
    São eventos que declaramos através do HTMÇ

No JavaScript 01
*/
var botao = document.getElementById('botao');

var meuEvento = function(){
        alert("estamos estudando eventos");

};

botao.onclick = meuEvento;

// No JavaScript 02

var botao = document.getElementById('botao');

botao.addEventListener('click', function meuEvento(){
    alert("estamos estudando eventos");

});

