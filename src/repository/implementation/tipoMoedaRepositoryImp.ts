import { TipoMoeda } from "../../domain/entities/tipoMoeda";
import { CriaTipoMoedaRepository } from "../tipoMoedaRepository";
import  db from '../../infrastructure/database/sequelize/models';

export class TipoMoedaRepository implements CriaTipoMoedaRepository{
    public tipoMoeda: TipoMoeda[] = [];
    async create(nome: string):Promise<TipoMoeda | null>{
        const tipoMoeda = TipoMoeda.create({nome}).props
        const novoTipoMoeda = await db.tipoMoeda.create(tipoMoeda)

        if (!novoTipoMoeda){
            return null;
        }
        return novoTipoMoeda;
    }

    async findByNome(nome: string): Promise<TipoMoeda | null>{
        const tipoMoeda =  await db.tipoMoeda.findOne({ where: { nome: nome } })

        if (!tipoMoeda){
            return null;
        }
        return tipoMoeda.id;
    }

    async findById(idTipoMoeda: number): Promise<TipoMoeda | null>{
        const tipoMoeda =  await db.tipoMoeda.findOne({ where: { id: idTipoMoeda } });

        if (!tipoMoeda){
            return null;
        }
        return tipoMoeda.id;
    }


}