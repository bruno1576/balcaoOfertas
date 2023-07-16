import express from "express";
import  db from './database/sequelize/models';

const app = express();

app.get('/', (req, res) => {

 async function teste_parara(){
  const cart =  await db.carteira.create({ 
    idUsuario:2,
    nome: '12345',
 });
  }
  teste();

})

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
      console.log(`App listening on port ${3000}`)
  })
})