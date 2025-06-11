import categoria from '../models/Categorias.js'; // Importa o modelo de categoria

class CategoriaController {

    static listarCategorias = async (req, res) => {
        try {
            const categoriasResultado = await categoria.findAll();
            res.status(200).json(categoriasResultado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar categorias', error });
        }
    }

    static listarCategoriasPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const categoriaResultado = await categoria.findByPk(id);
            res.status(200).json(categoriaResultado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar categoria', error });
        }
    }

    static cadastrarCategoria = async (req, res) => {
        try {
            let categoriaNova = new categoria(req.body);
            const categoriaResultado = await categoriaNova.save();
            res.status(201).json(categoriaResultado.toJSON());
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cadastrar categoria', error });
        }
    }

    static atualizarCategoria = async (req, res) => {
        try {
            const id = req.params.id;
            await categoria.update(req.body, { where: { id: id } });
            const categoriaResultado = await categoria.findByPk(id);
            res.status(200).json(categoriaResultado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar categoria', error });
        }
    }

    static deletarCategoria = async (req, res) => {
        try {
            const id = req.params.id;
            await categoria.destroy({ where: { id: id } });
            res.status(200).json({ message: 'Categoria deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar categoria', error });
        }
    }
}

export default CategoriaController;