// JS Lógica dos Botões && Comunicar Servidor

import renderizarListas from "./renderLists.js";
import {transicaoTela} from "./movie.js";
import axios from "axios";
import ionicons from "ionicons";

export var listaGenero;

iniciarSite();
function iniciarSite(){
    var token = "00677d2daa69a1cc4505e8c461dd2031";
    var botaoVoltar = document.querySelector("#botaoVoltar");
    var listaButao = document.querySelectorAll("nav button");
    var [populares, nosCinemas, maioresNotas, emBreve] = listaButao;
    var filmes = {populares, nosCinemas, maioresNotas, emBreve};
    var links = {Popular: "popular", NosCinemas: "now_playing", MaioresNotas: "top_rated", EmBreve: "upcoming"};
    
    listaDeGenero(token);

    adicionarEventosCliques(filmes, filmes.populares, links.Popular);
    adicionarEventosCliques(filmes, filmes.nosCinemas, links.NosCinemas);
    adicionarEventosCliques(filmes, filmes.maioresNotas, links.MaioresNotas);
    adicionarEventosCliques(filmes, filmes.emBreve, links.EmBreve);

    botaoVoltar.addEventListener("click", () => transicaoTela(true));
    iniciarPopulares(token);
}

function listaDeGenero(token) {
    var link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${token}&language=en-US`;
    var req = axios.get(link);
    req.then(resposta => listaGenero = resposta.data);
}   

function adicionarEventosCliques(filmes, tipoDeLista, tipoLink) {
    tipoDeLista.addEventListener("click", evento => {
        var token = "00677d2daa69a1cc4505e8c461dd2031";
        var linkFinal = `https://api.themoviedb.org/3/movie/${tipoLink}?api_key=${token}`;
        alternarFundo(evento.target, filmes);
        chamarServidor(linkFinal, renderizarListas);
    });
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

function iniciarPopulares(token) {
    var link = `https://api.themoviedb.org/3/movie/popular?api_key=${token}`;
    chamarServidor(link, renderizarListas);
}
