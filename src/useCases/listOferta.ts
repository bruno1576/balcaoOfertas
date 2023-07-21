import { OfertaRepository } from "../repository/ofertaRepository";


export class ListOferta {
    constructor(
        private listOfertaRepository: OfertaRepository,

    ){
      
    }
    async handle(page:number){
        const oferta : any  = await this.listOfertaRepository.findAllOferta(page);
        return oferta
      
    }
    
}