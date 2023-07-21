import { CriaNovaOferta } from "./createOferta";
import { OfertaRepositoryTest } from "../../tests/repository/ofertaRepositoryTest";
import { TipoMoedaRepositoryTest } from "../../tests/repository/tipoMoedaRepositoryTest";
import { MoedaRepository } from "../../tests/repository/moedaRepositoryTest";

describe('criação da oferta useCase',() => {
    it('Deve criar uma oferta', async() =>{
        const repositoryOfertaTeste = new OfertaRepositoryTest();
        const repositoryTipoMoedaTeste = new TipoMoedaRepositoryTest();
        const repositoryMoedaTeste = new MoedaRepository();
        const sut = new CriaNovaOferta(repositoryOfertaTeste,repositoryTipoMoedaTeste,repositoryMoedaTeste);
        const response = await sut.handle({
            idTipoMoeda: 1,
            idMoeda: 1,
            ofertaAtiva: true,
            dataHora: new Date(),
            precoUnitario: 1, 
            quantidade: 1
           
        })
        expect(response).toBeTruthy()
    }
    )

});