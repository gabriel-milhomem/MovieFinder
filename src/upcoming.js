import {renderizarListaFilme} from "./popular.js";

export default function renderizarEmBreve(dados) {
    var listaFilme = [];
    
    dados.results.forEach(filme => {
        var {id, title: titulo, poster_path: poster, overview: sinopse, vote_average: avaliacao, genre_ids: generos} = filme;
        var objeto = {id, titulo, poster, sinopse, avaliacao, generos};
        listaFilme.push(objeto);
    });

    renderizarListaFilme(listaFilme);
}
