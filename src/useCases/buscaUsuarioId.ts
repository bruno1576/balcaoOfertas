import { CriaUsuarioRepository } from "../repository/usuarioRepository";


export class BuscaUsuarioId {
    constructor(
        private listUsuarioRepository: CriaUsuarioRepository,

    ){
      
    }
    async handle(idUsuario:number){
        const usuario : any  = await this.listUsuarioRepository.findById(idUsuario);
        return usuario
      
    }
    
}