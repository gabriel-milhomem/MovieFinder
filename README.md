# Link Live

https://milhomem-movie-finder.netlify.app/
Obs: Layout somente versão desktop

# Descrição

Seu primeiro projeto usando JavaScript Moderno será um site que te ajuda a descobrir novos filmes!

# Requisitos

- Geral
    - [x]  Não utilize bibliotecas para manipular o HTML (como jquery)
    - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub
    - [x]  Para isso, comece fazendo um **fork** **privado** deste repositório
    - [x]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit
- Layout
    - [x]  Aplicar layout para desktop, seguindo imagens fornecidas
- Modularização
    - [x]  Você deverá modularizar seu projeto em, pelo menos, 6 arquivos:
        - `main.js` ⇒ Responsável pelo comportamento do menu
        - `popular.js` ⇒ Responsável por renderizar a lista de filmes populares
        - `now_playing.js` ⇒ Responsável por renderizar a lista de filmes que estão no cinema
        - `top_rated.js` ⇒ Responsável por renderizar a lista de filmes que tem as maiores notas
        - `upcoming.js` ⇒ Responsável por renderizar a lista de filmes que serão lançados em breve
        - `movie.js` ⇒ Responsável por renderizar a tela de um filme em específico
    - [x]  Você deve usar `import / export` para acessar as funções de outros arquivos
    - [x]  Você deve usar o Webpack para gerar o build final do seu JavaScript
- Estrutura de pastas
    - [x]  Suas pastas devem ser organizadas da seguinte forma
        - 📁 movie-finder
            - 📁node_modules
            - 📁public
                - 📁images

                    Aqui ficam suas imagens como background e logo

                - 📁styles

                    Aqui ficam seus arquivos CSS

                - 📄 index.html

                    Este é seu arquivo HTML principal

                - 📄 build.js

                    Este é o arquivo JS gerado pelo webpack

            - 📁src
                - 📄 main.js
                - 📄 popular.js
                - 📄 now_playing.js
                - 📄 top_rated.js
                - 📄 upcoming.js
                - 📄 movie.js
            - 📄 .gitignore

                Arquivo que configura o git para ignorar certas pastas/arquivos

            - 📄 package.json

                Arquivo que guarda as configurações do npm (gerado automaticamente pelo npm!)

            - 📄 package-lock.json

                Arquivo que guarda informações sobre as suas bibliotecas instaladas (gerado automaticamente pelo npm!)

            - 📄 webpack.config.js

                Arquivo para configurar o webpack

- Gerenciamento de Dependências
    - [x]  Você deve utilizar o npm para instalar as bibliotecas que possam ser instaladas por ele (ex: axios)
    - [x]  Você deve configurar o Git (através do arquivo .gitignore) para não versionar a pasta `node_modules` nem o arquivo `public/build.js`
- Tela de lista de filmes
    - [x]  Ao entrar no site, automaticamente deve-se renderizar a tela de filmes populares
    - [x]  Ao navegar pelo menu, devem ser renderizadas cada tela de acordo com o item clicado
    - [x]  Para obter a lista de filmes de cada categoria, utilize o serviço **The Movie Database API**
        - Link da documentação: [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)
        - Endpoints para cada categoria:
            - Populares: [https://api.themoviedb.org/3/movie/popular?api_key=](https://api.themoviedb.org/3/movie/popular?api_key=)API_KEY
            - No cinema: [https://api.themoviedb.org/3/movie/now_playing?api_key=](https://api.themoviedb.org/3/movie/now_playing?api_key=)API_KEY
            - Maiores notas: [https://api.themoviedb.org/3/movie/top_rated?api_key=](https://api.themoviedb.org/3/movie/top_rated?api_key=)API_KEY
            - Em breve: [https://api.themoviedb.org/3/movie/upcoming?api_key=](https://api.themoviedb.org/3/movie/upcoming?api_key=)API_KEY
        - No lugar de API_KEY você deve colocar uma chave obtida através do cadastro nessa plataforma. Você pode se cadastrar e gerar sua chave (basta seguir o link da documentação ali em cima!).

- Tela de um filme
    - [x]  Ao clicar em um filme, deverá ser renderizada a tela do filme clicado. Não é necessário disparar nenhum outro request pro servidor pra obter esses dados, todos eles já vêm nos requests anteriores

# Bônus (opcional)

- [x]  Adicionar um botão de **Voltar** na tela de um filme para voltar para a tela anterior
- [x]  Adicionar as informações de **gênero** do filme na tela do filme (Dica: No objeto que representa um filme tem uma lista de **genre_ids**, com os ids dos gêneros do filme. Explore a API para tentar pegar os nomes desses gêneros.)
- [x]  Coloque um botão de "Favoritar" um filme dentro da tela do filme, de forma que quando voltar pra tela de listagem, apareça uma estrela sobre os filmes favoritados
- [ ]  Experimente persistir essa informação de Favoritos para que ela seja mantida mesmo que o usuário feche e re-abra seu site (Dica: pesquise por LocalStorage; Dica 2: Para usar Local Storage, antes pesquise pela extensão Live Server do VS Code, você precisará estar rodando o projeto por ela para usar o Local Storage).
