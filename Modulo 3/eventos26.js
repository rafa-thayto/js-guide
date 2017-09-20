/*
* 
* Eventos
*
*/

window.onload = function() {

    var meuBotao = document.getElementById('botao');

    // meuBotao.onclick = meuEvento;

    meuBotao.addEventListener('click', meuEvento);

}

function meuEvento(event){
    // Este evento intercepta o evento padrão
    event.preventDefault();
    alert('Cliquei 3');

    // OU

    // Quando você poe retorno falso em algum evento,
    // ele não executa o evento programado
    // como clicar em um link, se tiver falso ele n vai no link.
    // return false;
}
