
import { Entity } from "../../core/domain/Entity"
// 

export interface OfertaProps {
    id: number;
    idMoeda: number;
    ativa: boolean;
    dataHora: Date;
    precoUnitario: number;
    quantidade: number;
}

export class Oferta extends Entity<OfertaProps> {
    private constructor(props: OfertaProps, id?: number){
        super(props, id);
    }
    public create(propos: OfertaProps, id?:number){
        const oferta = new Oferta(propos, id);
        return oferta;
    }


}
