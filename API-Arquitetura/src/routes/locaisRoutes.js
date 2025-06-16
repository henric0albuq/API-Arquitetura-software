import express from 'express';
import locais from '../controllers/locaisController.js';

const router = express.Router();

router
   
    .get('/locais', locais.listarLocais)
    .get('/locais/:id', locais.listarLocaisPorId)
    .post('/locais', locais.cadastrarLocais)
    .put('/locais/:id', locais.atualizarLocais)
    .delete('/locais/:id', locais.deletarLocais);

    export default router;