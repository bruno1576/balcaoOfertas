import{Carteira} from '../domain/entities/carteira'

export interface CriaCarteiraRepository{
    create(idUsuario: number, nome: string): Promise<Carteira | null>;
    findByUsuario(idUsuario: number): Promise<Carteira[] | null>;
}
