
import { Entity } from "../../core/domain/Entity"
// 

export interface CarteiraProps {
    idUsuario: number;
    nome: string;
}

export class Carteira extends Entity<CarteiraProps> {
    private constructor(props: CarteiraProps, id?: number){
        super(props, id);
    }
    static create(propos: CarteiraProps, id?:number){
        const carteira = new Carteira(propos, id);
        return carteira;
    }


}
