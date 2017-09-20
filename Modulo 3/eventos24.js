/* Eventos
 Eventos Inline
*/

window.onload = function() {
    var meuBotao = document.getElementById('botao');

    // meuBotao.onclick = meuEvento;

    /* meuBotao.addEventListener('click', function meuEvento(){
        alert('cliquei')
    }); */
    
    
    meuBotao.addEventListener('click', meuEvento);

};

function meuEvento() {
    alert('cliquei');
}
