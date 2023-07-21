import { Usuario } from "../../domain/entities/usuario";
import { CriaUsuarioRepository } from "../usuarioRepository";
import  db from '../../infrastructure/database/sequelize/models';

export class UsuarioRepository implements CriaUsuarioRepository{
    public usuarios: Usuario[] = [];
    async create(nome: string, login: string, senha: string):Promise<Usuario | null>{
        const usuario = Usuario.create({nome,login,senha}).props
        const novoUsuario = await db.usuario.create(usuario)

        if (!novoUsuario){
            return null;
        }
        return novoUsuario;
    }

    async findByConta(login: string, senha: string): Promise<Usuario | null>{
        const usuario =  await db.usuario.findOne({ where: { login: login, senha: senha } })

        if (!usuario){
            return null;
        }
        return usuario.id;
    }

    async findByLogin(login: string): Promise<Usuario | null>{
        const usuario =  await db.usuario.findOne({ where: { login: login} })

        if (!usuario){
            return null;
        }
        return usuario.id;
    }

    async findById(idUsuario: number): Promise<Usuario | null>{
        const usuario =  await db.usuario.findOne({ where: { id: idUsuario} })

        if (!usuario){
            return null;
        }
        return usuario;
    }


}