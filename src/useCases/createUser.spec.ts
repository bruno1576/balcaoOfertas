import { CriaNovoUsuario } from "./createUser";
import { UsuarioRepositoryTest } from "../../tests/repository/usuarioRepositoryTest";


describe('criação do usuario useCase',() => {
    it('Deve criar um usuario', async() =>{
        const repositoryTeste = new UsuarioRepositoryTest()
        const sut = new CriaNovoUsuario(repositoryTeste);
        const response = await sut.handle({
            nome: 'teste',
            login: 'TesteNovoUsuario',
            senha: 'SenhaTeste'
        })
        expect(response).toBeTruthy()
    }
    )

});