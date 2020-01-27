### Back-end (Arquitetura MVC) -
Construido com Sucrase + Nodemon + MongoDB

Na solicitação do teste foi informado para autenticar um usuário (hard coded), porem para mostrar um pouco mais do meu conhecimento em back-end Nodejs utilizei um banco de dados (noSQL) no arquivo .env do projeto já está o link de conexão com o MongoDB, será necessário apenas utilizar os comandos abaixo para rodar o server.

```
yarn install
```

```
yarn dev
```

### Rotas

Rota para obter a última cotação (só possivel utilizar essa rota com o token de autenticação)
```
GET http://localhost:3333/ticker
```

Enviar no corpo da requisição os campos "email" e "password" (formato json).
```
POST http://localhost:3333/auth
```

Enviar no corpo da requisição os campos "name", "email" e "password" (formato json).
```
POST http://localhost:3333/users
```

### Mobile -

No aplicativo foi desenvolvido adicionalmente também a tela de criar conta.

Mas também caso queira usar um usuário já criado segue abaixo.

usuário: test@test.com
senha: 123456

Para execução deste projeto, entre na pasta "mobile" e rode os seguintes comandos para execução:

```
yarn install
```

```
react-native run-ios
```

Como desenvolvi o projeto totalmente rodando em IOS se caso for executar em Android terá que fazer alguns ajustes como configuração de libs utilizadas, caso contrário está tudo de acordo para rodar em Iphone.

Para debug da aplicação foi utilizado o Reactotron a configuração do mesmo se encontra na pasta src/config/ReactotronConfig.js