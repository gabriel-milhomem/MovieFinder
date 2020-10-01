import {renderizarListaFilme} from "./popular.js";

export default function renderizarMaioresNotas(dados) {
    var listaFilme = [];
    
    dados.results.forEach(filme => {
        var {id, title: titulo, poster_path: poster, overview: sinopse } = filme;
        var objeto = {id, titulo, poster, sinopse};
        listaFilme.push(objeto);
    });

    renderizarListaFilme(listaFilme);
}
