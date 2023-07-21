import{TipoMoeda} from '../domain/entities/tipoMoeda'

export interface CriaTipoMoedaRepository{
    create(nome: string): Promise<TipoMoeda | null>;
    findByNome(nome: string): Promise<TipoMoeda | null>;
    findById(idTipoMoeda: number): Promise<TipoMoeda | null>;

}