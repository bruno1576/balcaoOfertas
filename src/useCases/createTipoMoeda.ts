import { CriaTipoMoedaRepository } from "../repository/tipoMoedaRepository";


type CriaNovoTipoMoedaRequest = {
    nome: string;
}

export class CriaNovoTipoMoeda {
    constructor(
        private TipoMoedaRepository: CriaTipoMoedaRepository,

    ){
      
    }
    async handle({nome}: CriaNovoTipoMoedaRequest  ){
        const id : any  = await this.TipoMoedaRepository.findByNome(nome);
        if(!id){
        const novoTipoMoeda = await this.TipoMoedaRepository.create(nome)
        return novoTipoMoeda;

        }else{
            return {erro:'Este tipo de moeda já existe'}
        }
      
    }
    
}