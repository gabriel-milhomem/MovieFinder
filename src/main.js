import renderizarPopulares from "./popular.js";
import renderizarNosCinemas from "./now_playing.js";
import renderizarMaioresNotas from "./top_rated.js";
import renderizarEmBreve from "./upcoming.js";
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
    listaDeGenero(token);
    filmes.populares.addEventListener("click", evento => {
        alternarFundo(evento.target, filmes);
        iniciarPopulares(token);
    });

    filmes.nosCinemas.addEventListener("click", evento => {
        var link = `https://api.themoviedb.org/3/movie/now_playing?api_key=${token}`;
        alternarFundo(evento.target, filmes);
        chamarServidor(link, renderizarNosCinemas);
    });

    filmes.maioresNotas.addEventListener("click", evento => {
        var link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${token}`;
        alternarFundo(evento.target, filmes);
        chamarServidor(link, renderizarMaioresNotas);
    });

    filmes.emBreve.addEventListener("click", evento => {
        var link = `https://api.themoviedb.org/3/movie/upcoming?api_key=${token}`;
        alternarFundo(evento.target, filmes);
        chamarServidor(link, renderizarEmBreve);
    });

    botaoVoltar.addEventListener("click", evento => {
        transicaoTela(true);
    });

    iniciarPopulares(token);
}

function iniciarPopulares(token) {
    var link = `https://api.themoviedb.org/3/movie/popular?api_key=${token}`;
    chamarServidor(link, renderizarPopulares);
}

function alternarFundo(categoriaClicada, filmes) {
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

function listaDeGenero(token) {
    var link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${token}&language=en-US`;
    var req = axios.get(link);
    req.then(resposta => {
        listaGenero = resposta.data;
    });
}   