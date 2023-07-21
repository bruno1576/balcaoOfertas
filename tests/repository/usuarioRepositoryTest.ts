import { Usuario } from "../../src/domain/entities/usuario";
import { CriaUsuarioRepository } from "../../src/repository/usuarioRepository";

export class UsuarioRepositoryTest implements CriaUsuarioRepository{
    public usuarios: Usuario[] = [];
    async create(nome: string, login: string, senha: string):Promise<Usuario | null>{
        const usuario = Usuario.create({nome,login,senha})

        if (!usuario){
            return null;
        }
        return usuario;
    }

    async findByLogin(login: string): Promise<Usuario | null>{
        const nome = 'teste';
        const senha = 'senha'
        let usuario = Usuario.create({nome,login,senha})
        
        if(login === 'TesteNovoUsuario'){
            return null;
        }
       
        if (!usuario){
            return null;
        }
        return usuario;
    }

    async findByConta(login: string, senha: string): Promise<Usuario | null>{
        const nome = 'teste';
        let usuario = Usuario.create({nome,login,senha})
        
        if(login === 'TesteNovoUsuario'){
            return null;
        }
       
        if (!usuario){
            return null;
        }
        return usuario;
    }

    async findById(idUsuario: number): Promise<Usuario | null>{
        const nome = 'teste';
        const login = 'teste';
        const senha = 'teste';
        let usuario = Usuario.create({nome,login,senha})
       
        if (!usuario){
            return null;
        }
        return usuario;
    }

}