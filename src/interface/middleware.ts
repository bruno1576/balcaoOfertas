import {Request,response, Response} from 'express'
import { CriaNovoUsuario } from '../useCases/createUser';
import {UsuarioRepository} from '../repository/implementation/usuarioRepositoryImp' 
import { CriaNovaCarteira } from '../useCases/createCarteira';
import { CriaNovaOferta } from '../useCases/createOferta';
import { ListOferta } from '../useCases/listOferta';
import { CarteiraRepository } from '../repository/implementation/carteiraRepositoryImp';
import { OfertaRepositoryImp } from '../repository/implementation/ofertaRepositoryImp';
import { TipoMoedaRepository } from '../repository/implementation/tipoMoedaRepositoryImp';
import { MoedaRepository } from '../repository/implementation/moedaRepositoryImp';
import { DeleteOferta } from '../useCases/deleteOferta';
import { ListUsuario } from '../useCases/listUsuario';
import { BuscaUsuarioId } from '../useCases/buscaUsuarioId';

export class Middleware {
    static async createUsuario(req: Request, res: Response ){
        const {nome, login, senha} = req.body;
        const useRepo = new UsuarioRepository()
        const novoUsuario = await new CriaNovoUsuario(useRepo).handle({nome, login, senha})
        if (novoUsuario){
        return res.json(novoUsuario);
        }else{
            return res.status(400).json({
                mensagem: "Não foi possivel criar o usuario"
            });
        }
    }
    static async createCarteira(req: Request, res: Response ){
        const {login,nome} = req.body;
        const useCarteiraRepo = new CarteiraRepository();
        const useUsuarioRepo = new UsuarioRepository()
        const novoUsuario = 
         await new CriaNovaCarteira(useCarteiraRepo,useUsuarioRepo).handle({nome, login })
        if (novoUsuario){
            return res.json(novoUsuario);
        }else{
            return res.status(400).json({
                mensagem: "Não foi possivel localizar o usuario"
            });
        }
    }

    static async createOferta(req: Request, res: Response ){
        let {idMoeda,precoUnitario,quantidade} = req.body;  
        const useOfertaaRepo = new OfertaRepositoryImp();
        const useTipoMoedaRepo = new TipoMoedaRepository();
        const useMoedaRepo = new MoedaRepository();
        const dataHora = new Date();
        const ofertaAtiva = true;
        const novaOferta = 
        await new CriaNovaOferta(useOfertaaRepo,useTipoMoedaRepo,useMoedaRepo).handle({idMoeda,
        ofertaAtiva,dataHora,precoUnitario,quantidade });


        if (novaOferta['sucesso']){
            return res.json(novaOferta);
        }else{
            return res.status(400).json({
                mensagem: "Não foi possivel criar a oferta"
            });
        }
    }
    static async deleteOferta(req: Request, res: Response ){
        const {idOferta, idUsuario} = req.body;
        const useRepoOferta = new OfertaRepositoryImp()
        const useRepoCarteria = new CarteiraRepository()
        const useRepoMoeda = new MoedaRepository()
        const novoUsuario = 
        await new DeleteOferta(useRepoOferta,useRepoCarteria,useRepoMoeda).handle({idOferta, idUsuario})
        if (novoUsuario){
        return res.json(novoUsuario);
        }else{
            return res.status(400).json({
                mensagem: "Não foi possivel deletar a oferta"
            });
        }
    }

    static async buscaUsuario(req: Request, res: Response ){
        const {login, senha} = req.body;
        const useRepo = new UsuarioRepository();
        const usuarios = await new ListUsuario(useRepo).handle(login, senha)
        if (usuarios){
        return res.json(usuarios);
        }else{
            return res.status(400).json({
                mensagem: "Não foi possivel buscar o oferta"
            });
        }
    }

    static async buscaUsuarioId(req: Request, res: Response ){
        const {IdUsuario} = req.body;
        const useRepo = new UsuarioRepository();
        const usuarios = await new BuscaUsuarioId(useRepo).handle(IdUsuario)
        if (usuarios){
        return res.json(usuarios);
        }else{
            return res.status(400).json({
                mensagem: "Não foi possivel buscar o oferta"
            });
        }
    }

    static async listOferta(req: Request, res: Response ){
        let { page } = req.query;
        const Numberpage =  isNaN(Number(page)) ? 1 : Number(page) 
        const useRepo = new OfertaRepositoryImp()
        const listaOferta = await new ListOferta(useRepo).handle(Numberpage)
        if (listaOferta){
        let pagination = {
            path: '/listaoferta',
            page
        };
        return res.json({
            listaOferta,
            pagination
            
        });
        }else{
            return res.status(400).json({
                mensagem: "Não foi possivel listar as ofertas"
            });
        }
    }
}