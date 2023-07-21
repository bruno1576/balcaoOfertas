import { Carteira } from "../../domain/entities/carteira";
import { CriaCarteiraRepository } from "../carteiraRepository";
import  db from '../../infrastructure/database/sequelize/models';

export class CarteiraRepository implements CriaCarteiraRepository{
    public carteiras: Carteira[] = [];
    async create(idUsuario: number,nome: string):Promise<Carteira | null>{
        const carteira = Carteira.create({idUsuario, nome}).props
        const novoCarteira = await db.carteira.create(carteira)

        if (!novoCarteira){
            return null;
        }
        return novoCarteira;
    }

    async findByUsuario(idUsuario: number): Promise<Carteira[] | null>{
        const carteira =  await db.carteira.findAll({ where: { idUsuario: idUsuario } })

        if (!carteira){
            return null;
        }
        return carteira;
    }


}