import { CriaNovaCarteira } from "./createCarteira";
import { UsuarioRepositoryTest } from "../../tests/repository/usuarioRepositoryTest";
import { CarteiraRepositoryTest } from "../../tests/repository/carteiraRepositoryTest";
import { only } from "node:test";


describe('criação do carteira useCase',() => {
    it('Deve criar uma carteira', async() =>{
        const repositoryUsuarioTeste = new UsuarioRepositoryTest();
        const repositoryCarteiraTeste = new CarteiraRepositoryTest();
        const sut = new CriaNovaCarteira(repositoryCarteiraTeste,repositoryUsuarioTeste);
        const response = await sut.handle({
            nome: "Teste",
            login: "deck"
           
        })
        expect(response).toBeTruthy()
    }
    )

});