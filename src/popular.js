import exibirTelaUnica from "./movie.js";

export default function renderizarPopulares(dados) {
    var listaFilme = [];
    dados.results.forEach(filme => {
        var {id, title: titulo, poster_path: poster, overview: sinopse, vote_average: avaliacao, genre_ids: generos} = filme;
        var objeto = {id, titulo, poster, sinopse, avaliacao, generos};
        listaFilme.push(objeto);
    });

    renderizarListaFilme(listaFilme);
}

export function renderizarListaFilme(listaFilme){
    var container = document.querySelector(".listaFilme");
    container.innerHTML = "";
    listaFilme.forEach(filme => {
        var novoLi = document.createElement("li");
        novoLi.innerHTML = `<img id= "${filme.id}" src= "https://image.tmdb.org/t/p/w300${filme.poster}" alt= "Poster do Filme"/>`;
        novoLi.querySelector("img").addEventListener('click', elem => {
            exibirTelaUnica(elem, listaFilme);
        });
        container.appendChild(novoLi);
    });
}