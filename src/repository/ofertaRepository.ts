import{Oferta} from '../domain/entities/oferta'

export interface OfertaRepository{
    create(idMoeda: number, ofertaAtiva: boolean, dataHora: Date, precoUnitario:number,
        quantidade:number): Promise<Oferta | null>;
    findByOferta(idMoeda: number, ativa: boolean,dataHora: Date ): Promise<Oferta | null>;
    findById(idOferta: number): Promise<Oferta | null>;
    findAllOferta(page: number): Promise<Oferta[] | null>;
    countOferta(idMoeda: number): Promise<number | null>;
    deleteOferta(idOferta: number): Promise<Oferta | null>;

}