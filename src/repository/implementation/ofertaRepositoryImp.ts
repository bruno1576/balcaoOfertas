import { Oferta } from "../../domain/entities/oferta";
import { OfertaRepository } from "../ofertaRepository";
import  db from '../../infrastructure/database/sequelize/models';
import {Op} from "sequelize";

export class OfertaRepositoryImp implements OfertaRepository{
    async create(idMoeda: number, ofertaAtiva: boolean, dataHora: Date, precoUnitario:number,
        quantidade:number):Promise<Oferta | null>{
        const oferta = Oferta.create({idMoeda,ofertaAtiva,dataHora,precoUnitario,quantidade}).props
        const novooferta = await db.ofertas.create(oferta)

        if (!novooferta){
            return null;
        }
        return novooferta;
    }

    async findByOferta(idMoeda: number, ativa: boolean,dataHora: Date ): Promise<Oferta | null>{
        const tipoMoeda =  await db.ofertas.findOne({ where: { idMoeda: idMoeda,
            ativa:ativa,dataHora:dataHora } })

        if (!tipoMoeda){
            return null;
        }
        return tipoMoeda.id;
    }
    async findById(idOferta: number): Promise<Oferta | null>{
        const oferta =  await db.ofertas.findOne({ where: { id: idOferta} })

        if (!oferta){
            return null;
        }
        return oferta;
    }
    async findAllOferta(page:number): Promise<Oferta[] | null>{
        const today_init = new Date().setHours(0, 0, 0, 0);
        const today_end = new Date().setHours(23,59,59,999);
        const count = await db.ofertas.count({where: 
            {ofertaAtiva: true,  dataHora:{[Op.between] : [today_init , today_end ]}}, 
            order: [ ['dataHora', 'DESC']]})

        if(count > 0){
            const limit = 10;
            let lastPage = 1
            lastPage = Math.ceil(count / limit)
            const ofertas = 
            await db.ofertas.findAll({where: {ofertaAtiva: true, 
                 dataHora:{[Op.between] : [today_init , today_end ]}}, 
                 order: [ ['dataHora', 'DESC']],
                offset: Number((page * limit) - limit),
                limit: limit
                })
            return ofertas;
        }
      
        return null;
    }

    async countOferta(idMoeda: number): Promise<number | null>{

        const usuarioMoeda =  await db.moeda.findOne({ where: { id: idMoeda } })
        const usuarioCarteira =  await db.carteira.findOne({ where: { id: usuarioMoeda.idCarteira } })
        if(!usuarioCarteira){
        return null;
        }
        const carteiras =  await db.carteira.findAll({ where: { idUsuario: usuarioCarteira.idUsuario } })
        const idCarteiras = carteiras.map((carteira:any)=>{
                return carteira.id

            })
    
            const moedas =  await db.moeda.findAll({where: { idCarteira:{[Op.in] : idCarteiras}  }})
            const today_init = new Date().setHours(0, 0, 0, 0);
            const now = new Date();
            now.setHours(new Date().getHours() + 3);
            const idMoedas = moedas.map((moeda:any)=>{
                return moeda.id

            });
            
            const {count} = await db.ofertas.findAndCountAll({where:  {idMoeda: {[Op.in] : idMoedas},  dataHora:{[Op.between] : [today_init , now ]}  }});
            
    
            return count;
    }

    async deleteOferta(idOferta: number): Promise<Oferta | null>{
        const ofertas =  await db.ofertas.update({ofertaAtiva: false },{ where: { id: idOferta} });
        return ofertas;
    }


}