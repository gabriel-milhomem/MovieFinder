export default function renderizarPopulares(dados) {
    var listaFilme = [];

    dados.results.forEach(filme => {
        listaFilme.push({
            id: filme.id,
            titulo: filme.title,
            poster: filme.poster_path,
            sinopse: filme.overview
        })
    });

    renderizarListaFilme(listaFilme);
}

export function renderizarListaFilme(listaFilme){
    var container = document.querySelector("ul");
    container.innerHTML = "";
    listaFilme.forEach(filme => {
        var novoLi = document.createElement("li");
        novoLi.innerHTML = `<img id= "${filme.id}" src= "https://image.tmdb.org/t/p/w300${filme.poster}" alt= "Poster do Filme"/>`;
        container.appendChild(novoLi);
    });
}