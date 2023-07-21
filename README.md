# Balcao de Ofertas
#####Desafio técnico
####Como executar
Para instalar as dependencias, execute:
> npm i

Execute o comando para criar as tabelas no banco de dados SQlite que já foi pré configurado:
>npx sequelize-cli db:migrate

Para popular o banco de dados com os seeds execute o comando:
>npx sequelize-cli db:seed:all

Agora rode o projeto com o comando:
> npm run dev 

Agora você pode acessar as rotas a seguir utilizando 
o [Postman](https://postman.com/) ou o [insomnia](https://insomnia.rest/download)


Pronto, agora você pode acessar as principais rotas como:
POST:
>
>localhost:3001/listaoferta?page=1

Method | URL | O que faz | Parâmetros com exemplo
:--------- | :------: | -------: | -------:
POST | localhost:3001/listaoferta?page=1 | Restorna uma lista paginada de todas as ofertas ativas (Não deletadas) do dia atual | Na URL é possivel passar o valor ?page=numero da pagina para ver mais resultador
POST |localhost:3001/oferta | Cria uma nova oferta|{"idTipoMoeda": 1,"idMoeda":2,"precoUnitario":1,"quantidade": 1}
POST |localhost:3001/delete|faz o softdelete da oferta, setando false no campo de oferta ativa|	{"idOferta": 3,"idUsuario":1}

