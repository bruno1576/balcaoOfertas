import{Moeda} from '../domain/entities/moeda'

export interface CriaMoedaRepository{
    create(idTipoMoeda: number, idCarteira: number, quantidade: number): Promise<Moeda | null>;
    findById(idMoeda: number): Promise<Moeda | null>;
    findByMoeda(idTipoMoeda: number, idCarteira: number): Promise<Moeda | null>;

}