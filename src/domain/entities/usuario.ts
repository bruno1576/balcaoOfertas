
import { Entity } from "../../core/domain/Entity"
// 

type UsuarioProps = {
    id?: number;
    nome: string;
    login: string;
    senha: string;
}

export class Usuario extends Entity<UsuarioProps> {
    private constructor(props: UsuarioProps, id?: number){
        super(props, id);
    }
    static create(props: UsuarioProps, id?:number){
        const usuario = new Usuario({...props}, id);
        return usuario;
    }

}
