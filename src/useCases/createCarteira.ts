import { CriaUsuarioRepository } from "../repository/usuarioRepository";
import { CriaCarteiraRepository } from "../repository/carteiraRepository";

type CriaNovoCarteiraRequest = {
    nome: string;
    login: string;
}

export class CriaNovaCarteira {
    constructor(
        private CarteiraRepository: CriaCarteiraRepository,
        private UsuarioRepository: CriaUsuarioRepository

    ){
      
    }
    async handle({nome, login}: CriaNovoCarteiraRequest  ){
        const id : any  = await this.UsuarioRepository.findByLogin(login);
        if(id){
        const idUsuario : any = id
        const novoCarteira = await this.CarteiraRepository.create(idUsuario,nome)
        return novoCarteira;

        }else{
            return {erro:'Usuario indicado não existe'}
            
        }
      
    }
    
}