# Boas vindas ao repositório do projeto Cookmaster!
Projeto feito na escola de programação Trybe.
Neste projeto aprendi como criar uma API RESTful em arquitetura MSC, uso de tokens JWT, upload de arquivos com Multer.
A proposta do projeto foi criar uma API de receitas para capaz de cadastrar usuários, iniciar com login, ademas de cadastrar, atualizar, deletar e listar receitas, ademas de buscar por receita individual.

## Tecnologias utilizadas no projeto
- Nodejs
- Express
- MongoDB
- Biblioteca JWT
- Biblioteca Multer

## Instrucciones para iniciar o projeto

- Inicie o servidor do mongodb

- Clone o repositório:

- git clone `git@github.com:MartinGBB/Project-Cookmaster.git`
- Entre na pasta do repositório que você acabou de clonar:
`cd project-cookmaster`
- Instale as dependências:
`npm install`

# Habilidades

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

---


# Rotas do projeto

## Endpoint para o cadastro de usuários

###  Rota POST `/users`.

- O endpoint recebe os campos email, senha, nome e role.

- Para criar um usuário através da API, todos os campos são obrigatórios, com exceção do Role.

- O campo Email deve ser único.

- O body da requisição deve conter o seguinte formato:

  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```


- Se o usuário tiver o campo email inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

  ``` json
    {
      "message": "Invalid entries. Try again."
    }
  ```

- Se o usuário tiver o campo email inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

  ``` json
    {
      "message": "Email already registered"
    }
  ```

- Se o usuário for cadastrado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

  ``` json
    {
      "user": {
        "_id": "string",
        "name": "string",
        "email": "string",
        "role": "user"
      }
    }
  ```

## Endpoint para o login de usuários

### Rota POST `/login`.

- A rota deve receber os campos email e senha.

- Um token `JWT` é gerado e retornado caso haja sucesso no login.

- O body da requisição deve conter o seguinte formato:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```


- Caso haja falha na validação a requisição será respondida com o status 401 e uma mensagem de erro como o exemplo abaixo:

    ```json
    {
      "message": "All fields must be filled"
    }
    ```

- Se o login tiver o email ou senha inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

    ```json
    {
      "message": "Incorrect username or password"
    }
    ```

- Se foi feito login com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
    {
     "token": "string"
    }
  ```

## Endpoint para o cadastro de receitas

### Rota POST `/recipes`.

- A receita só pode ser criada se o usuário esta logado e o token `JWT` validado.

- Aeceita deve ter os campos nome, ingredientes, modo de preparo, URL da imagem e id do autor.

- Nome, ingredientes e modo de preparo devem ser recebidos no corpo da requisição, com o seguinte formato:

  ```json
    {
      "name": "string",
      "ingredients": "string",
      "preparation": "string"
    }
  ```
- O campo ID do autor, e preenchido automaticamente com o id do usuário logado, ele é extraído do token JWT.


- Se a receita não tiver algum dos compos anteriores o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

  ```json
    {
      "message": "Invalid entries. Try again."
    }
  ```
- Se a receita não tiver o token válido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:

  ```json
    {
      "message": "jwt malformed"
    }
  ```
- Caso o email já esteja em uso a requisição será respondida com o status 409 e uma mensagem de erro como o exemplo abaixo:

  ```json
    {
      "message": "Email already registered"
    }
  ```
- O resultado retornado para cadastrar a receita com sucesso deverá ser conforme exibido abaixo, com um status http `201`:

  ```json
  {
    "user": {
      "_id": "string",
      "name": "string",
      "email": "string",
      "role": "admin"
    }
  }
  ```
## Endpoint para a listagem de receitas

### Rota GET `/recipes`.

- A rota pode ser acessada por usuários logados ou não

- A rota retorna uma lista com todas as receitas cadastradas e um status http `200`:

  ```json
  [
    {
      "name": "string",
      "ingredients": "string",
      "preparation": "string",
      "_id": "string",
      "userId": "string"
    },
    {
      "name": "string",
      "ingredients": "string",
      "preparation": "string",
      "_id": "string",
      "userId": "string"
    },
  ]
  ```
- Caso a receita não exista a requisição será respondida com o status 404 e uma mensagem de erro como o exemplo abaixo:

  ```json
  {
    "message": "recipe not found"
  }
  ```
## 5 - Endpoint para visualizar uma receita específica

### Rota GET `/recipes/:id`.

- A rota pode ser acessada por usuários logados ou não

O resultado retornado para listar uma receita com sucesso deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string",
    "_id": "string",
    "userId": "string"
  }
  ```
O resultado retornado para listar uma receita que não existe deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  {
    "message": "recipe not found"
  }
  ```

## Tem uma query no banco de dados que insire uma pessoa usuária com permissões de admin

Tem um arquivo `seed.js` na raiz do projeto com uma query do Mongo DB capaz de inserir um usuário na coleção _users_ com os seguintes valores:

`{ name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' }`

## Endpoint para a edição de uma receita

### Rota PUT `/recipes/:id`.

- A rota deve ser autenticada enviando o token como header authorization da requisição, que é obtido na rota de login

- A receita só pode ser atualizada caso pertença ao usuário logado, ou caso esse usuário seja um admin.

- O corpo da requisição deve receber o seguinte formato:

  ```json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string"
  }
  ```
- O resultado retornado para editar receita sem autenticação deverá ser conforme exibido abaixo, com um status http `401`:

  ```json
  {
    "message": "missing auth token"
  }
  ```
- O resultado retornado para editar receita com token inválido deverá ser conforme exibido abaixo, com um status http `401`:

  ```json
  {
    "message": "jwt malformed"
  }
  ```
- O resultado retornado para editar uma receita com sucesso deverá ser conforme exibido abaixo, com um status http `200`:

  ``` json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string",
    "_id": "string",
    "userId": "string"
  }
  ```
## Endpoint para a exclusão de uma receita

### Rota DELETE `/recipes/:id`.

- A receita só pode ser excluída caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser excluída caso pertença ao usuário logado, ou caso o usuário logado seja um admin.

- O resultado retornado para excluir uma receita sem autenticação deverá ser conforme exibido abaixo, com um status http `401`:

  ``` json
  {
    "message": "missing auth token"
  }
  ```
- Caso o token não seja válido a requisição será respondida com o status 401 e uma mensagem de erro como o exemplo abaixo:

  ``` json
  {
    "message": "jwt malformed"
  }
  ```
- Caso a receita não exista a requisição será respondida com o status 404 e uma mensagem de erro como o exemplo abaixo:

  ``` json
  {
    "message": "recipe not found"
  }
  ```
- O resultado retornado para excluir uma receita com sucesso deverá ser conforme exibido abaixo, com um status http `204`:

  ``` json
  {
    "message": "you can only delete your recipes"
  }
  ```
## Endpoint para a adição de uma imagem a uma receita

### Rota PUT `/recipes/:id/image/`.

- A imagem deve ser lida do campo `image`.

- O endpoint aceita requisições no formato `multipart/form-data`.

- A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser atualizada caso pertença ao usuário logado ou caso o usuário logado seja admin.

- O upload da imagem deverá é feito utilizando o `Multer`.

- O nome do arquivo será o ID da receita, e sua extensão `.jpeg`.

- A URL completa para acessar a imagem através da API deve ser gravada no banco de dados, junto com os dados da receita.

- O resultado retornado para adicionar uma foto na receita com sucesso deverá ser conforme exibido abaixo, com um status http `200`:

  ``` json
  {
    "name": "string",
    "ingredients": "string",
    "preparation": "string",
    "_id": "string",
    "userId": "string",
    "image": "string"
  }
  ```
- O resultado retornado para adicionar uma foto na receita com sucesso deverá ser conforme exibido abaixo, com um status http `401`:

  ``` json
  {
    "message": "missing auth token"
  }
  ```
- O resultado retornado para adicionar uma foto na receita com sucesso deverá ser conforme exibido abaixo, com um status http `200`:

  ``` json
  {
    "message": "missing auth token"
  }
  ```

## 10 - Endpoint para acessar a imagem de uma receita
### Rota PUT `/images/<id-da-receita>.jpeg`

- O resultado retornado deverá ser do tipo imagem, com um status http `200`:

