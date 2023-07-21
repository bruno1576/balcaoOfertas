import { Moeda } from "../../src/domain/entities/moeda";
import { CriaMoedaRepository } from "../../src/repository/moedaRepository";


export class MoedaRepository implements CriaMoedaRepository{
    public Moedas: Moeda[] = [];
    async create(idTipoMoeda: number,idCarteira: number, quantidade: number):Promise<Moeda | null>{
        const novaMoeda = Moeda.create({idTipoMoeda,idCarteira,quantidade})

        if (!novaMoeda){
            return null;
        }
        return novaMoeda;
    }

    async findById(idTipoMoeda: number): Promise<Moeda | null>{
    
        const BuscaMoeda = this.Moedas.find(Moeda => Moeda.id == idTipoMoeda
            );
        if (!BuscaMoeda){
            return null;
        }
        return BuscaMoeda;
    }

    async findByMoeda(idTipoMoeda: number,idCarteira: number): Promise<Moeda | null>{
    
        const BuscaMoeda = this.Moedas.find(Moeda => Moeda.props.idTipoMoeda == idTipoMoeda &&
            Moeda.props.idCarteira == idCarteira
            );
        if (!BuscaMoeda){
            return null;
        }
        return BuscaMoeda;
    }


}