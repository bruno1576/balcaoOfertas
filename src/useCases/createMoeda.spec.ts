import { CriaNovaMoeda } from "./createMoeda";
import { MoedaRepository } from "../../tests/repository/moedaRepositoryTest";
import { TipoMoedaRepositoryTest } from "../../tests/repository/tipoMoedaRepositoryTest";



describe('criação Moeda useCase',() => {
    it('Deve criar uma Moeda', async() =>{
        const repositoryMoedaTeste = new MoedaRepository();
        const repositoryTipoMoedaTeste = new TipoMoedaRepositoryTest();
        const sut = new CriaNovaMoeda(repositoryMoedaTeste,repositoryTipoMoedaTeste);
        const response = await sut.handle({
            idCarteira: 1,
            idTipoMoeda:1,
            quantidade:10
           
        })
        expect(response).toBeTruthy()
    }
    )

});