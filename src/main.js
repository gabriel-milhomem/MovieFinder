// JS Lógica dos Botões && Comunicar Servidor

import renderizarListas from "./renderLists.js";
import {transicaoTela} from "./movie.js";
import axios from "axios";

export var listaGenero;
export var idsFavorito = [];
var estaFavoritado;

iniciarSite();
function iniciarSite(){
    var token = "00677d2daa69a1cc4505e8c461dd2031";
    var [botaoVoltar, iconeFavoritar] = document.querySelectorAll("#botaoVoltar, #iconFavoritar");
    var [populares, nosCinemas, maioresNotas, emBreve] = document.querySelectorAll("nav button");
    var filmes = {populares, nosCinemas, maioresNotas, emBreve};

    var links = {Popular: "popular", NosCinemas: "now_playing", MaioresNotas: "top_rated", EmBreve: "upcoming"};
    
    listaDeGenero(token);

    adicionarEventosCliques(filmes, filmes.populares, links.Popular);
    adicionarEventosCliques(filmes, filmes.nosCinemas, links.NosCinemas);
    adicionarEventosCliques(filmes, filmes.maioresNotas, links.MaioresNotas);
    adicionarEventosCliques(filmes, filmes.emBreve, links.EmBreve);

    botaoVoltar.addEventListener("click", () => transicaoTela(true));
    
    logicaFavorito(iconeFavoritar);

    iniciarPopulares(token);
}

function listaDeGenero(token) {
    var link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${token}&language=en-US`;
    var req = axios.get(link);
    req.then(resposta => listaGenero = resposta.data);
}

function adicionarEventosCliques(filmes, tipoDeLista, tipoLink) {
    tipoDeLista.addEventListener("click", evento => {
        salvarFavoritos();
        var token = "00677d2daa69a1cc4505e8c461dd2031";
        var linkFinal = `https://api.themoviedb.org/3/movie/${tipoLink}?api_key=${token}`;
        alternarFundo(evento.target, filmes);
        chamarServidor(linkFinal, renderizarListas);
    });
}

function salvarFavoritos() {
    var listaFavorito = document.querySelectorAll(".iconAparecer");
    listaFavorito.forEach(favorito => {
        idsFavorito.push(favorito.parentNode.getAttribute("id"));
    });

    idsFavorito = idsFavorito.filter((id, i) => i === idsFavorito.indexOf(id));
}

function alternarFundo(categoriaClicada, filmes) {
    Object.keys(filmes).forEach(categoria => {
        filmes[categoria].classList.remove("fundoVerde");
    });

    categoriaClicada.classList.add("fundoVerde");
}

function chamarServidor(link, renderizar) {
    var req = axios.get(link);
    req.then(resposta => renderizar(resposta.data));
}

function logicaFavorito(icone) {
    icone.addEventListener("click", elem => {
        var icon = elem.target;
        var id = elem.target.parentNode.getAttribute("id");
        var listaLi = Array.from(document.querySelectorAll(`.listaFilme li`));
        var posterFilme = listaLi.find(li => li.getAttribute("id") == id);
        var poster = posterFilme.querySelector(".favorito").classList;

        estaFavoritado = poster.contains("iconAparecer");

        if(estaFavoritado) {
            poster.remove("iconAparecer");
            icon.classList.remove("corAmarela");
        }
        
        else {
            poster.add("iconAparecer");
            icon.classList.add("corAmarela");
        }
        
    });
}


function iniciarPopulares(token) {
    var link = `https://api.themoviedb.org/3/movie/popular?api_key=${token}`;
    chamarServidor(link, renderizarListas);
}
