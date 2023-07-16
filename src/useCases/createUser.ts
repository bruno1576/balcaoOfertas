import { Usuario } from "../domain/entities/usuario";


type CriaNovoUsuarioRequest = {
    nome: string;
    login: string;
    senha: string;
}

export class CriaNovoUsuario {
    handle({nome, login, senha}: CriaNovoUsuarioRequest  ){
        const novoUsuario = Usuario.create({nome,login,senha});

        return novoUsuario;
    }
    
}