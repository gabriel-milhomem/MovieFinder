import {listaGenero} from "./main.js";

export default function exibirTelaUnica(evento, listaFilme) {
    transicaoTela(false);

    var listaHTML = document.querySelectorAll("figure, h1, .avaliacao, .generosFilme, p");
    //resetarArticle(listaHTML);

    var [posterCaixa, tituloCaixa, avaliacaoCaixa, generosCaixa, sinopseCaixa] = listaHTML;
    var id = parseInt(evento.target.getAttribute("id"));
    var filmeSelecionado = listaFilme.find(filme => filme.id === id);

    posterCaixa.innerHTML = `<img src= "https://image.tmdb.org/t/p/w300${filmeSelecionado.poster}" alt= "Poster do Filme"/>`;
    tituloCaixa.innerText = filmeSelecionado.titulo;
    avaliacaoCaixa.innerHTML = `<strong> ${filmeSelecionado.avaliacao} </strong>`;
    

    var nomesGeneros = filmeSelecionado.generos.map(id => {
        return listaGenero.genres.find(objeto => id === objeto.id); 
    });

    console.log('MANO FAZ ALGO FILHO DA PUTAs');
    generosCaixa.innerHTML = `<span> Generos: </span>`;
    nomesGeneros.forEach(objeto => {
        generosCaixa.innerHTML += `<li> ${objeto.name} </li>`
    });

    sinopseCaixa.innerHTML = `<span> Sinopse:</span>${filmeSelecionado.sinopse}`;
}

function resetarArticle(lista){
    lista.forEach(html => html.innerHTML = "");
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