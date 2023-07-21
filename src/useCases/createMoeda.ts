import { CriaMoedaRepository } from "../repository/moedaRepository";
import { CriaTipoMoedaRepository } from "../repository/tipoMoedaRepository";


type CriaNovaMoedaRequest = {
    idTipoMoeda: number;
    idCarteira: number;
    quantidade: number;
}

export class CriaNovaMoeda {
    constructor(
        private MoedaRepository: CriaMoedaRepository,
        private TipoMoedaRepository: CriaTipoMoedaRepository,

    ){
      
    }
    async handle({idTipoMoeda, idCarteira, quantidade}: CriaNovaMoedaRequest  ){
        const tipoMoeda : any  = await this.TipoMoedaRepository.findById(idTipoMoeda);
        if(tipoMoeda){
        const id : any  = await this.MoedaRepository.findByMoeda(idTipoMoeda,idCarteira);
        if(!id){
        const novaMoeda = await this.MoedaRepository.create(idTipoMoeda,idCarteira, quantidade)
        return novaMoeda;

        }else{
            return {erro:'Esta moeda já existe'}
        }
    }else{
        return {erro:'O tipo de moeda não existe'}
    }
      
    }
    
}