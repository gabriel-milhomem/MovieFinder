
var filmes;
iniciarSite();
function iniciarSite(){
    var listaButao = document.querySelectorAll("nav button");
    filmes = {
        populares: listaButao[0],
        nosCinemas: listaButao[1],
        maioresNotas: listaButao[2],
        emBreve: listaButao[3]
    };
}

filmes.populares.addEventListener("click", iniciarPopulares);

function iniciarPopulares(evento) {
    alternarFundo(evento.target);
}

filmes.nosCinemas.addEventListener("click", evento => {
    alternarFundo(evento.target);

});

filmes.maioresNotas.addEventListener("click", evento => {
    alternarFundo(evento.target);

});

filmes.emBreve.addEventListener("click", evento => {
    alternarFundo(evento.target);

});

function alternarFundo(categoriaClicada) {
    Object.keys(filmes).forEach(categoria => {
        filmes[categoria].classList.remove("fundoVerde");
    });

    categoriaClicada.classList.add("fundoVerde");
}