import renderizarPopulares from "./popular.js";
import renderizarNosCinemas from "./now_playing.js";
import renderizarMaioresNotas from "./top_rated.js";
import renderizarEmBreve from "./upcoming.js";

var token = "00677d2daa69a1cc4505e8c461dd2031";
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

    iniciarPopulares();
}

filmes.populares.addEventListener("click", evento => {
    alternarFundo(evento.target);
    iniciarPopulares();
});

function iniciarPopulares() {
    var link = `https://api.themoviedb.org/3/movie/popular?api_key=${token}`;
    chamarServidor(link, renderizarPopulares);
}

filmes.nosCinemas.addEventListener("click", evento => {
    var link = `https://api.themoviedb.org/3/movie/now_playing?api_key=${token}`;
    alternarFundo(evento.target);
    chamarServidor(link, renderizarNosCinemas);
});

filmes.maioresNotas.addEventListener("click", evento => {
    var link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${token}`;
    alternarFundo(evento.target);
    chamarServidor(link, renderizarMaioresNotas);
});

filmes.emBreve.addEventListener("click", evento => {
    var link = `https://api.themoviedb.org/3/movie/upcoming?api_key=${token}`;
    alternarFundo(evento.target);
    chamarServidor(link, renderizarEmBreve);
});

function alternarFundo(categoriaClicada) {
    Object.keys(filmes).forEach(categoria => {
        filmes[categoria].classList.remove("fundoVerde");
    });

    categoriaClicada.classList.add("fundoVerde");
}

function chamarServidor(link, renderizar) {
    var req = axios.get(link);
    req.then(resposta => {
        renderizar(resposta.data);
    });
}