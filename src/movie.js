// JS -> Renderizaração Tela Unica && Transicao

import {listaGenero} from "./main.js";

export default function exibirTelaUnica(evento, listaFilme) {
    var listaHTML = document.querySelectorAll("figure, h1, .avaliacao, .generosFilme, p");
    var li = evento.target.parentNode;
    var id = li.getAttribute("id");
    var filmeSelecionado = listaFilme.find(filme => filme.id == id);
    var botaoFavoritar = document.querySelector(".caixaAlinhar button");
    botaoFavoritar.setAttribute("id", id);


    transicaoTela(false);
    resetarArticle(listaHTML);
    renderizarTelaUnica(filmeSelecionado, listaHTML, li);
}

export function transicaoTela(irTelaInicial) {
    var paginas = document.querySelectorAll("nav, .listaFilme, article");
    var [nav, ul, article] = paginas;
    if(irTelaInicial) {
        nav.classList.remove("oculto");
        ul.classList.remove("oculto");
        article.classList.add("oculto");
    }

    else {
        nav.classList.add("oculto");
        ul.classList.add("oculto");
        article.classList.remove("oculto");
    }
}

function resetarArticle(lista) {
    lista.forEach(osHtml => osHtml.innerHTML = "");
}

function renderizarTelaUnica(escolhido, listaHTML, li) {
    var [posterCaixa, tituloCaixa, avaliacaoCaixa, generosCaixa, sinopseCaixa] = listaHTML;
    var iconeFavorito = document.querySelector("#iconFavoritar").classList;
    var ehFavorito = li.querySelector(".favorito").classList.contains("iconAparecer");
    var nomesGeneros = escolhido.generos.map(id => {
        return listaGenero.genres.find(genero => id == genero.id); 
    });

    (ehFavorito) ? iconeFavorito.add("corAmarela"): iconeFavorito.remove("corAmarela");
    posterCaixa.innerHTML = `<img src= "https://image.tmdb.org/t/p/w300${escolhido.poster}" alt= "Poster do Filme"/>`;
    tituloCaixa.innerText = escolhido.titulo;
    avaliacaoCaixa.innerHTML = `<strong> ${escolhido.avaliacao} </strong>`;
    generosCaixa.innerHTML = `<span> Generos: </span>`;
    nomesGeneros.forEach(genero => {
        generosCaixa.innerHTML += `<li> ${genero.name} </li>`
    });

    sinopseCaixa.innerHTML = `<span> Sinopse: </span>${escolhido.sinopse}`;
}