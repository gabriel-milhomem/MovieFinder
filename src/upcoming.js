import {renderizarListaFilme} from "./popular.js";

export default function renderizarEmBreve(dados) {
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
