import { TipoMoeda } from "../../src/domain/entities/tipoMoeda";
import { CriaTipoMoedaRepository } from "../../src/repository/tipoMoedaRepository";

export class TipoMoedaRepositoryTest implements CriaTipoMoedaRepository{
    public tipoMoedas: TipoMoeda[] = [];
    async create(nome: string):Promise<TipoMoeda | null>{
        const tipoMoeda = TipoMoeda.create({nome})

        if (!tipoMoeda){
            return null;
        }
        return tipoMoeda;
    }

    async findByNome(nome: string): Promise<TipoMoeda | null>{
        const tipoMoeda = this.tipoMoedas.find(tipoMoeda => tipoMoeda.props.nome == nome);

        if (!tipoMoeda){
            return null;
        }
        return tipoMoeda;
    }
    async findById(id: number): Promise<TipoMoeda | null>{
        const nome = 'bitcoin';
        const tipoMoeda = TipoMoeda.create({nome})

        if (!tipoMoeda){
            return null;
        }
        return tipoMoeda;
    }

}