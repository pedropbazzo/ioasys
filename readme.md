<h3 align="center">
    <img alt="Logo" title="#logo" width="400px" src="/print/logo.png">
    <br><br>
    <br>
</h3>

# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>Enterprise</strong> é uma aplicação Mobile desenvolvida como parte do desafio de React Native para a empresa Ioasys.<br><br>
Um aplicativo que tem as funcionalidade de <strong>Login</strong>, <strong>Listagem das Empresas</strong>, <strong>Busca por empresa</strong> e <strong>Profile do usuário logado</strong>
<br><br>

<h3>Aqui você encontra as telas do sistema: </h3>

<br>

<h3 align="center">
    <img alt="SignIn" title="#logo" width="400px" src="/print/signIn.png">
    <img alt="SignUp" title="#logo" width="400px" src="/print/signUp.png">
      <br><br>
    <img alt="Home" title="#logo" width="400px" src="/print/home.png">
    <img alt="Search" title="#logo" width="400px" src="/print/search.png">
      <br><br>
    <img alt="Profile" title="#logo" width="400px" src="/print/profile.png">
    <img alt="Detail Enterprise" title="#logo" width="400px" src="/print/detailenterprise.png">
      <br><br>
</h3>

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [React Native](https://reactnative.dev/) <br>
  Dependências utilizadas e explicações sobre elas:

  * @react-native-async-storage/async-storage:

    * `AsyncStorage é uma API nativa do React Native, utilizada para armazenar dados persistentes no dispositivo. É uma forma de salvar dados no formato chave e valor`;

  * @react-navigation:

    * `É uma biblioteca popular para roteamento e navegação em uma aplicação React Native. Essa biblioteca ajuda a resolver o problema de navegar entre várias telas e compartilhar dados entre elas. Aqui foram utilizados a <strong>@react-navigation/bottom-tabs</strong> e a <strong>@react-navigation/stack</strong>`;

  * axios:

    * `Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API. Serve para estruturar e configurar as chamadas da api`;

  * react-native-gesture-handler:

    * `Uma biblioteca que nos auxilia a lidar com gestos do usuário`;

  * react-native-vector-icons

    * `Biblioteca que utilizada para adicionar ícones no projeto. Aqui foi utilizado os ícones do Feather`;

  * styled-components:

    * `É uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript. Nos da praticidade. Criando códigos dessa forma, podemos reaproveitar o CSS de um projeto de forma mais rápida e ainda escrevê-lo sem revezar entre estilos diferentes de escrita`.

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Executando a Aplicação:

```sh

  # Clone o repositório

  # Instale as dependências
  $ npm install ou yarn

  # Inicie a aplicação mobile
  $ cd nome da pasta
  $ npm start ou yarn android
```

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
