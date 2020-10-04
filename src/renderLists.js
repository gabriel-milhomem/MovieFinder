// JS Renderização-> Lista De filmes (tela inicial)

import exibirTelaUnica from "./movie.js";
import {idsFavorito} from "./main.js";

export default function renderizarListas(dados) {
    var listaFilme = [];

    dados.results.forEach(filme => {
        var {id, title: titulo, poster_path: poster, overview: sinopse, vote_average: avaliacao, genre_ids: generos} = filme;
        var objeto = {id, titulo, poster, sinopse, avaliacao, generos};
        listaFilme.push(objeto);
    });

    renderizarListaFilme(listaFilme);
}

function renderizarListaFilme(listaFilme){
    console.log(idsFavorito);
    var container = document.querySelector(".listaFilme");

    container.innerHTML = "";
    listaFilme.forEach(filme => {
        var novoLi = document.createElement("li");
        novoLi.setAttribute("id", filme.id);
        novoLi.innerHTML = `
            <img src= "https://image.tmdb.org/t/p/w300${filme.poster}" alt= "Poster do Filme"/>
            <div class= "favorito"> <ion-icon name= "star"> </ion-icon> </div>
        `;

        idsFavorito.forEach(id => {
            if(id == filme.id) {
                novoLi.querySelector(".favorito").classList.add("iconAparecer");
            }
        });

        novoLi.addEventListener("click", elem => {
            exibirTelaUnica(elem, listaFilme);
        });

        container.appendChild(novoLi);
    });
}
