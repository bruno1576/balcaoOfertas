import {Router} from 'express';
import { Middleware } from './middleware';

const router = Router();

router.post('/usuario', (req, res) => Middleware.createUsuario(req, res))
router.post('/carteira', (req, res) => Middleware.createCarteira(req, res))
router.post('/oferta', (req, res) => Middleware.createOferta(req, res))
router.post('/buscaUsuario', (req, res) => Middleware.buscaUsuario(req, res))
router.post('/buscaUsuarioId', (req, res) => Middleware.buscaUsuarioId(req, res))
router.post('/listaoferta', (req, res) => Middleware.listOferta(req, res))
router.post('/delete', (req, res) => Middleware.deleteOferta(req, res))



export { router };