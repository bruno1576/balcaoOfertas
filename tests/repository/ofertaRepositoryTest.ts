import { Oferta } from "../../src/domain/entities/oferta";
import { OfertaRepository } from "../../src/repository/ofertaRepository";

export class OfertaRepositoryTest implements OfertaRepository{
    public ofertas: Oferta[] = [];
    async create(idMoeda: number, ofertaAtiva: boolean, dataHora: Date, precoUnitario:number,
        quantidade:number): Promise<Oferta | null>{
        idMoeda = 1;
        ofertaAtiva= true;
        dataHora= new Date();
        precoUnitario= 1;
        quantidade=1;
        const oferta = Oferta.create({idMoeda,ofertaAtiva,dataHora,precoUnitario,quantidade})

        if (!oferta){
            return null;
        }
        return oferta;
    }

    async findByOferta(idUsuario: number): Promise<Oferta | null>{
        const idMoeda = 1;
        const ofertaAtiva= true;
        const dataHora= new Date();
        const precoUnitario= 1;
        const quantidade=1;
        const oferta = Oferta.create({idMoeda,ofertaAtiva,dataHora,precoUnitario,quantidade})

        if (!oferta){
            return null;
        }
        return oferta;
    }

    async findAllOferta(): Promise<Oferta[] | null>{
        const idMoeda = 1;
        const ofertaAtiva= true;
        const dataHora= new Date();
        const precoUnitario= 1;
        const quantidade=1;
       
        const oferta = Oferta.create({idMoeda,ofertaAtiva,dataHora,precoUnitario,quantidade})
        this.ofertas.push(oferta);
        if (!this.ofertas){
            return null;
        }
        return this.ofertas;
    }

    async countOferta(idCarteira: number): Promise<number | null>{
        return 2;
    }

    async findById(idOferta: number): Promise<Oferta | null>{
        const idMoeda = 1;
        const ofertaAtiva= true;
        const dataHora= new Date();
        const precoUnitario= 1;
        const quantidade=1;
        const oferta = Oferta.create({idMoeda,ofertaAtiva,dataHora,precoUnitario,quantidade})
        return oferta;
    }
    async deleteOferta(idOferta: number): Promise<Oferta | null>{
        const idMoeda = 1;
        const ofertaAtiva= true;
        const dataHora= new Date();
        const precoUnitario= 1;
        const quantidade=1;
        const oferta = Oferta.create({idMoeda,ofertaAtiva,dataHora,precoUnitario,quantidade})
        return oferta;
    }





}