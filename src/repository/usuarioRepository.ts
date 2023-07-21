import{Usuario} from '../domain/entities/usuario'

export interface CriaUsuarioRepository{
    create(nome: string, login: string, senha: string): Promise<Usuario | null>;
    findByConta(login: string, senha: string): Promise<Usuario | null>;
    findByLogin(login: string): Promise<Usuario | null>;
    findById(idUsuario: number): Promise<Usuario | null>;

}