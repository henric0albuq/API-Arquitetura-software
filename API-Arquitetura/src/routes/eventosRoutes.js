import express from 'express';
import eventosController from '../controllers/eventosControllers.js';

const router = express.Router();

router
.get('/eventos', eventosController.listarEventos)
.get('/eventos/:id', eventosController.listarEventosPorId)
.post('/eventos', eventosController.cadastrarEvento)
.put('/eventos/:id', eventosController.atualizarEvento)
.delete('/eventos/:id', eventosController.deletarEvento);

export default router;