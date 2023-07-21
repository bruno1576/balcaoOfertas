import { OfertaRepository } from "../repository/ofertaRepository";
import { CriaCarteiraRepository } from "../repository/carteiraRepository";
import { CriaMoedaRepository } from "../repository/moedaRepository";

type OfertaRequest = {
    idOferta: number;
    idUsuario: number;
}

export class DeleteOferta {
    constructor(
        private deleteOfertaRepository: OfertaRepository,
        private carteiraRepository: CriaCarteiraRepository,
        private moedaRepository: CriaMoedaRepository,

    ){
      
    }
    async handle({idOferta, idUsuario}: OfertaRequest  ){
        const carteiras = await this.carteiraRepository.findByUsuario(idUsuario);
        const ofertaAtual : any = await this.deleteOfertaRepository.findById(idOferta);
        const idMoeda = ofertaAtual['idMoeda'];
        const moeda: any = await this.moedaRepository.findById(idMoeda)
        const carteira = carteiras!.map((carteira:any)=>{
            return carteira.id

        })
        if(carteira.includes(moeda['idCarteira'])){
            const oferta : any  = await this.deleteOfertaRepository.deleteOferta(idOferta);
            return ('foram desativadas ' + oferta + ' oferta(s)');
        }else{
            return('a oferta não pertence ao usuario informado');
        }
    
    
      
    }
    
}