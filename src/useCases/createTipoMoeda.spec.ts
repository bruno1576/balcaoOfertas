import { CriaNovoTipoMoeda } from "./createTipoMoeda";
import { TipoMoedaRepositoryTest } from "../../tests/repository/tipoMoedaRepositoryTest";



describe('criação do tipo Moeda useCase',() => {
    it('Deve criar um tipo de Moeda', async() =>{
        const repositoryTipoMoedaTeste = new TipoMoedaRepositoryTest();
        const sut = new CriaNovoTipoMoeda(repositoryTipoMoedaTeste);
        const response = await sut.handle({
            nome: "Teste",
           
        })
        expect(response).toBeTruthy()
    }
    )

});