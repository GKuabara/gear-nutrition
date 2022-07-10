# Gear Nutrition

Project to course SCC0219 - Introduction to web development at USP

O tema escolhido para desenvolver o website foi uma e-commerce de suplementos com uma temática baseada no anima/mangá One Piece.

AVISO: Esse é um projeto realizado para fins educativos e tem problemas graves de segurança.

### Autores

- Gabriel Alves Kuabara - nUSP 11275043
- Victor Henrique de Sa Silva - nUSP 11795759
- Fernando Henrique Paes Generich - nUSP 11795342

## Requisitos

O sistema contém 2 tipos de usuários: clientes e administradores.

**Clientes** são aqueles que compram os produtos. Esses são registrados com as informações de CPF, nome, número de celular, endereço e email.

Na nossa implementação **Administradores** também são usuários e são responsáveis por gerenciar usuários, outros administradores e produtos. A aplicação já vem como padrão um email *admin@usp.br* e senha *admin*.

Os **produtos** contém um código de identificação, nome, foto, descrição, preço e quantidade em estoque.

Sobre a **venda**, os produtos selecionados são adicionados ao carrinho na quantidade especificada. Uma venda pode ser efetuada através de um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade comprada é subtraída do estoque. Somente quando uma compra é efetuada ou o usuário excluí os itens, que o carrinho é esvaziado.

Sobre o **gerenciamento de produtos**, os administradores podem criar, atualizar, ver e deletar produtos.

Como **funcionalidade** extra, criaremos uma página na qual o usuário pode inserir alguns dados pessoais, os quais usaremos para calcular, aproximadamente, sua [taxa metabólica basal](https://pt.wikipedia.org/wiki/Metabolismo_basal) (TMB). Com essa estimativa, o usuário pode, começando sozinho e, posteriormente, com ajuda profissional, estabelecer uma dieta mais adequada para si.

O sistema é responsivo e visa uma boa acessibilidade e usabilidade para seus usuários.

## Descrição do Projeto

Gear Nutrition é um site com temática do famoso anime/manga One Piece, que vende suplementos destinados ao consumo por atletas para alta performance esportiva. 

Implementado em HTML, CSS, JavaScript.

Diagrama de navegação:<br>
![alt text](./mockups/navigation_diagram.png)

As imagens do mockup estão na pasta `/mockup`.

### Funcionalidades

Sobre as funcionalidades planejadas para o website:
- Cadastro usando email e senha, assim como login.
- Visualização das informações do cliente, com opção de alterar alguns dados cadastrais, ver histórico de pedidos e deslogar.
- Acesso ao carrinho de compras, sendo possível alterar quantidades dos produtos selecionados e prosseguir com a finalização da compra.
- Uma página de pagamento, no qual o cliente insere os dados para finalizar a compra.
- Homepage com categorias e produtos visando acessibilidade.
- Página de cada produto com todas as informações necessárias e possibilidade de adicionar ao carrinho.
- Página de administrador capaz de visualizar, alterar, adicionar e remover produtos no estoque.
- Uma outra página de administrador na qual é possível visualizar, adicionar e remover outros administradores.
- E, por fim, uma página na qual o usuário pode calcular sua TMB.

### Servidor

As informações que devemos salvar são:

Usuários:
- Id (chave única para cliente)
- Nome
- Email
- Senha
- Campo booleano para indicar administrador
- CPF
- Endereço de Entrega (Único por usuário)
  -  Nome
  -  Logradouro
  -  Número
  -  CEP
  -  Bairro
  -  Cidade
  -  Estado
- Número de telefone

Produtos:
- Id (chave única para produto)
- Nome
- Categoria (popular, gear second, gear third, gear fourth)
- Preço
- Descrição
- Identificador da Imagem
- Quantidade em estoque
- Quantidade vendida

## Comentários Sobre o Código

Todas as páginas e componentes (React Components) tem um arquivo JavaScript e um css próprios. Todos estão modularizados de forma a facilitar a leitura.

## Plano de Teste

No decorrer do projeto, decidimos, de acordo com as simulações sugeridas pela entrega final, testar algumas funcionalidades para garantir uma boa experiência para o usuário, sendo estas:
- Cadastro;
- Login;
- Visualização de produtos;
- Adicionar produtos ao carrinho;
- Finalização de compra no carrinho;
- Verificação do carrinho após a compra;
- Taxa Metabólica Basal (funcionalidade extra);
- Logout;
- Login de Administrador (email: admin@usp.br, senha: admin);
- Entrar em funções de administrador na barra de navegação;
- Visualização do estoque;
- Edição de itens no estoque;
- Adicionar produtos ao banco;
- Remover produtos do banco;
- Gerenciar usuários no banco;
- Tornar usuários administradores;
- Remover função administradora de usuários;
- Logout

## Resultado dos Testes

Os testes indicaram um bom funcionamento em todos os casos, indicando que nosso projeto corresponde aos ensinamentos e proposta da disciplina.

## Building

Para a Entrega Final, caso queira rodar o programa, dois comandos devem ser executados: na pasta ``back``, deve ser dado um ``npm install`` e um ``node server``, que irá instalar e inicializar o servidor. Já na pasta ``front``, deve ser dado um ``npm install`` e um ``npm start``, que irá carregar as páginas do frontend. 

Caso queira ver os mockups das páginas principais, por motivo de comparação, basta acessar a pasta ``mockups`` ou abrir o projeto no [figma](https://www.figma.com/file/ZMtR2FPqWEN6cs2xp5uz2I/Gear-Nutrition?node-id=0%3A1).

## Problemas

Estamos cientes de que as validações de *inputs* não estão perfeitas como realmente seria na implementação de um site profissional. Porém, o foco do desenvolvimento, que era a funcionamento do front com o back e o banco está funcionando perfeitamente, cujo era o foco da disciplina. Ademais, como pedido, também foi implementada a autenticação e autorização.

## Comentários

Não há.
