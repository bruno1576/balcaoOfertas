
import { Entity } from "../../core/domain/Entity"
// 

export interface MoedaProps {
    id: number;
    idTipoMoeda: number;
    idCarteira: number;
    quantidade: string;
}

export class Moeda extends Entity<MoedaProps> {
    private constructor(props: MoedaProps, id?: number){
        super(props, id);
    }
    public create(propos: MoedaProps, id?:number){
        const moeda = new Moeda(propos, id);
        return moeda;
    }


}
