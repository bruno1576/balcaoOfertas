
import { Entity } from "../../core/domain/Entity"
// 

export interface TipoMoedaProps {
    id: number;
    nome: string;
}

export class TipoMoeda extends Entity<TipoMoedaProps> {
    private constructor(props: TipoMoedaProps, id?: number){
        super(props, id);
    }
    public create(propos: TipoMoedaProps, id?:number){
        const tipoMoeda = new TipoMoeda(propos, id);
        return tipoMoeda;
    }


}
