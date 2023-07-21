import { privateDecrypt } from "crypto";
import { Usuario } from "../domain/entities/usuario";
import { CriaUsuarioRepository } from "../repository/usuarioRepository";

type CriaNovoUsuarioRequest = {
    nome: string;
    login: string;
    senha: string;
}

export class CriaNovoUsuario {
        constructor(
        private UsuarioRepository: CriaUsuarioRepository
    ){
      
    }
    async handle({nome, login, senha}: CriaNovoUsuarioRequest  ){
        const verificaCadastro = await this.UsuarioRepository.findByLogin(login);
        if(!verificaCadastro){

        const dadosUsuario = Usuario.create({nome,login,senha});
        const novoUsuario = await this.UsuarioRepository.create(dadosUsuario.props.nome,
              dadosUsuario.props.login,dadosUsuario.props.senha )
        return novoUsuario;

        }else{
           return {erro:'Este login já esta em uso'}
        }
      
    }
    
}