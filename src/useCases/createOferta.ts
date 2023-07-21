import { OfertaRepository } from "../repository/ofertaRepository";
import { CriaMoedaRepository } from "../repository/moedaRepository";
import { CriaTipoMoedaRepository } from "../repository/tipoMoedaRepository";

type CriaNovoOfertaRequest = {
    idMoeda: number;
    ofertaAtiva: boolean;
    dataHora: Date;
    precoUnitario: number;
    quantidade: number;
}

export class CriaNovaOferta {
    constructor(
        private OfertaRepository: OfertaRepository,
        private TipoMoedaRepository: CriaTipoMoedaRepository,
        private MoedaRepository: CriaMoedaRepository

    ){
      
    }
    async handle({idMoeda, ofertaAtiva,dataHora,precoUnitario,quantidade}: CriaNovoOfertaRequest  ){
        const moeda : any  = await this.MoedaRepository.findById(idMoeda);
        if(moeda){
        const ofertas : any  = await this.OfertaRepository.countOferta(moeda.id);
        if(ofertas < 5 && ofertas !== null){
            if(moeda.quantidade >= quantidade){
           const novaOferta =
            await this.OfertaRepository.create(idMoeda, ofertaAtiva,dataHora,precoUnitario,quantidade)
             
         return {sucesso:{novaOferta}}
            }
            else{
                return {erro:'Ocorreu um erro ao criar a oferta, o usuario não possui saldo suficiente'}
            }

        }else{
            return {erro:'Ocorreu um erro ao criar a oferta, o limite para este login foi atingido'}
        }}
        else{
            return {erro:'Este tipo de moeda não existe'}
        }
      
    }
    
}