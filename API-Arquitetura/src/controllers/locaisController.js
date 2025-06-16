import locais from '../models/Locais.js';

class LocaisController {

    static listarLocais = async (req, res) => {
        try {

            const locaisResultado = await locais.findAll();
            res.status(200).json(locaisResultado);

        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar locais', error });
        }
    }

    static listarLocaisPorId = async (req, res) => {
        try {
            const id = req.params.id;

            const locaisResultado = await locais.findByPk(id);

            res.status(200).json(locaisResultado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar local', error });
        }   
    }

    static cadastrarLocais = async (req, res) => {
        try {
            let local = new locais(req.body);
            const { nome, endereco, capacidade } = req.body;
            const novoLocal = await Local.create({ nome, endereco, capacidade });
            const locaisResultado = await local.save();
            res.status(201).json(locaisResultado.toJSON());
        } catch (error) {
            res.status(500).json({ message: 'Erro ao cadastrar local', error });
        }
    }

    static atualizarLocais = async (req, res) => {
        try {
            const id = req.params.id;

            await locais.update(req.body, {
                where: { id: id }
            });
            const locaisResultado = await locais.findByPk(id);

            res.status(200).json(locaisResultado);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar local', error });
        }
    }
    static deletarLocais = async (req, res) => {
        try {
            const id = req.params.id;

            await locais.destroy({
                where: { id: id }
            });

            res.status(200).json({ message: 'Local deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar local', error });
        }
    }

}

export default LocaisController;