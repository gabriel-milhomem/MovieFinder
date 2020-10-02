// JS -> Renderizaração Tela Unica && Transicao

import {listaGenero} from "./main.js";

export default function exibirTelaUnica(evento, listaFilme) {
    var listaHTML = document.querySelectorAll("figure, h1, .avaliacao, .generosFilme, p");
    var id = parseInt(evento.target.getAttribute("id"));
    var filmeSelecionado = listaFilme.find(filme => filme.id === id);

    transicaoTela(false);
    resetarArticle(listaHTML);
    renderizarTelaUnica(filmeSelecionado, listaHTML);
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
    lista.forEach(html => html.innerHTML = "");
}

function renderizarTelaUnica(escolhido, listaHTML) {
    var [posterCaixa, tituloCaixa, avaliacaoCaixa, generosCaixa, sinopseCaixa] = listaHTML;
    var nomesGeneros = escolhido.generos.map(id => {
        return listaGenero.genres.find(objeto => id === objeto.id); 
    });

    posterCaixa.innerHTML = `<img src= "https://image.tmdb.org/t/p/w300${escolhido.poster}" alt= "Poster do Filme"/>`;
    tituloCaixa.innerText = escolhido.titulo;
    avaliacaoCaixa.innerHTML = `<strong> ${escolhido.avaliacao} </strong>`;
    generosCaixa.innerHTML = `<span> Generos: </span>`;
    nomesGeneros.forEach(objeto => {
        generosCaixa.innerHTML += `<li> ${objeto.name} </li>`
    });

    sinopseCaixa.innerHTML = `<span> Sinopse:</span>${escolhido.sinopse}`;
}