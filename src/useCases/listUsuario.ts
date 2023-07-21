import { CriaUsuarioRepository } from "../repository/usuarioRepository";


export class ListUsuario {
    constructor(
        private listUsuarioRepository: CriaUsuarioRepository,

    ){
      
    }
    async handle(login:string, senha:string){
        const oferta : any  = await this.listUsuarioRepository.findByConta(login,senha);
        return oferta
      
    }
    
}