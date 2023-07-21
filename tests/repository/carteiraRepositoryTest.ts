import { Carteira } from "../../src/domain/entities/carteira";
import { CriaCarteiraRepository } from "../../src/repository/carteiraRepository";

export class CarteiraRepositoryTest implements CriaCarteiraRepository{
    public carteiras: Carteira[] = [];
    async create(idUsuario: number,nome: string):Promise<Carteira | null>{
        const carteira = Carteira.create({idUsuario,nome})

        if (!carteira){
            return null;
        }
        return carteira;
    }

    async findByUsuario(idUsuario: number): Promise<Carteira[] | null>{
        const nome = "teste";
        const carteira = Carteira.create({idUsuario,nome})
        let carteiras: Carteira[] = []
        carteiras.push(carteira);
        if (!carteira){
            return null;
        }
        return carteiras;
    }


}