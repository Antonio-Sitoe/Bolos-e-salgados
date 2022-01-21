# MiNHA CONTA
- [x] preencher os dados e validar todos os campos
- [x] colocar campo de pais
- [x] colocar campo de provincias ou cidades
- [x]colocar um loading ao modificar e mudar para pagina acount
- [x] fazer a estilizacao da pagina account
- [x] colocar rotas
- [x] componentes inputs selecionaveis

# Carinho
[X] atualizar o header
- [x] fazer o estilo do carinho
- [x] fazer o contexto do carrinho
- [x] assistir a aula de usereducer
- [x] fazer um contexto do carrinho e colocar o usereducer
      [x] ao clicar em
      [x] - adicionar ao carrinho
      colocar um objecto no carrrinho
      {id, nome,descricao, urldafoto, quantidade, preco}  
       preco quantidade

# Resumo
assim que e modificado o estate, ele iterra todo array,
busca nome, quantidade e o preco final
- [X] trabalhar a quantidade

- [x] fazer funcoes de incrementacoes para cada item do carrinho
- [x] fazer funcoes de decrementacoes para cada item do carrinho
- [x] fazer a funcao de remover item do carrinho

- [x] antes de remover pergunta se pretende remover
      o item do carrinho, ao remover, remove todos os
      itens que foram selecionados na quantidade
- [x] Remover carrinho
      pergunta se deseja remover
      se for sim
      filtra todos os elemetos com aquele id e remove
      - [x] Resumo assim que mudou o state

# Single page
[x] refazer o design da single page esta feia colocar slide de fotos
[x] armazenamento do carrinho no localstorage
[x] trabalahar nos buttoes dos carrinhos
[x] animacao de entrada para cada pagina
[x] quando clicar em adicionar carrinho exibir uma 
   mensagem assim que os items forem adicionados no carrinho
[x] animacoes nos buttoes para demostrar uma determinada acao
[x] fazer o estilo para a single page
[x] fazer o fecth de dados para a single page
[x] colocar os produtos relacionados
[x] fazer mobile


# checout
[x] estilo
[x] funcionalidades
[x] funcionalidade d login
[x] funcionalidade de criar conta
[] validacao de dados
[x] quando entrar no chackout deve ter um local para criar conta
    verifica se ele esta logado se estiver logado
    deve atualizar o carrinho e atualizar os dados
    se nao tiver logado, deve colocar para logar e depois de logar deve
    atualizar o carrinho no servidor atraves do token.

# Server

- [X] colocar no strapi um campo de mini discricao
para os produtos e atualizar no codigo
- [] Abrir content type coom relacao com user
- [] A atualizacao de dados
- [] armazenamento do carrinho no servidor

- [x] Fazer o deploy do strapi atual
- [x] colocar como esta no strapi actual

- [] comecar a subir conteudo
- [] fazer atualizacao no codigo do projecto fotos e outros
- [] actualizar requisicoes






Minhas compras
- [] colocar socket io no strapi
- [x] colocar uma tabela de compras ali
- [] Funcionalidade de pedidos
- [] fazer um content type de compras no strapi
- [] configurar socket io

pagina Login / Revisar / no strapi tambem

- [x] login
- [x] registar
- [] perdeu senha
- email de confiramcao atraves do strap
- [] se o cliente saiu da app, entra dia seguinte eu tenho de primeiro, colocar no contexto.
- [] validar o token, para ver se o token e valido ainda, e depois apanhar a informacao


Pagamentos
- [] simular uma compra
- [] mpesa plugin
- [] funcao de gerar fatura
- [] baixar fatura

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```


Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.