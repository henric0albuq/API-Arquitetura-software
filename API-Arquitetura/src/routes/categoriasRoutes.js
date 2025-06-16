import express from 'express';
import categorias from '../controllers/categoriaController.js'; // Importa o controlador de categorias


const router = express.Router();

router
    
    .get('/categorias', categorias.listarCategorias)
    .get('/categorias/:id', categorias.listarCategoriasPorId)
    .post('/categorias', categorias.cadastrarCategoria)
    .put('/categorias/:id', categorias.atualizarCategoria)
    .delete('/categorias/:id', categorias.deletarCategoria);

export default router;