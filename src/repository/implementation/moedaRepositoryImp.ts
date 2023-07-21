import { Moeda } from "../../domain/entities/moeda";
import { CriaMoedaRepository } from "../moedaRepository";
import  db from '../../infrastructure/database/sequelize/models';

export class MoedaRepository implements CriaMoedaRepository{
    public tipoMoeda: Moeda[] = [];
    async create(idTipoMoeda: number,idCarteira: number, quantidade: number):Promise<Moeda | null>{
        const novaMoedaEntity = Moeda.create({idTipoMoeda,idCarteira,quantidade}).props
        const novaMoeda = await db.moeda.create(novaMoedaEntity)

        if (!novaMoeda){
            return null;
        }
        return novaMoeda;
    }

    async findByMoeda(idTipoMoeda: number,idCarteira: number): Promise<Moeda | null>{
        const moeda =  await db.moeda.findOne({ where: { idTipoMoeda: idTipoMoeda,
            idCarteira:idCarteira } })

        if (!moeda){
            return null;
        }
        return moeda.id;
    }

    async findById(idTipoMoeda: number): Promise<Moeda | null>{
        const Moeda =  await db.moeda.findOne({ where: { id: idTipoMoeda} })

        if (!Moeda){
            return null;
        }
        return Moeda;
    }

 
}