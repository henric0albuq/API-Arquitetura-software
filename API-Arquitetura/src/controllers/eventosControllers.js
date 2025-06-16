import eventos from '../models/Eventos.js';

class EventosController {
    // Aqui você pode adicionar métodos para manipular eventos

    static listarEventos = async (req, res) => {
        try{

            const eventosResultado = await eventos.findAll();
            res.status(200).json(eventosResultado);
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao listar eventos', error });
        }
    }

    static listarEventosPorId = async (req, res) => {

        try{
            const id = req.params.id;

            const eventoResultado = await eventos.findByPk(id);

            res.status(200).json(eventoResultado);
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao listar evento', error });
        }
    }

   static cadastrarEvento = async (req, res) => {
    try {
        const { nome, descricao, dataInicio, dataFinal, idLocal, idCategoria } = req.body;
        if (!nome || !descricao || !dataInicio || !idLocal || !idCategoria) {
            return res.status(400).json({ message: 'Campos obrigatórios: nome, descricao, dataInicio, idLocal, idCategoria' });
        }

        let evento = await eventos.create({ nome, descricao, dataInicio, dataFinal, idLocal, idCategoria });
        res.status(201).json(evento.toJSON());
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar evento', error });
    }
}


    static atualizarEvento = async (req, res) => {
        try{
            const id = req.params.id;

            await eventos.update(req.body, {
                where: { id: id }
            });
            const eventoResultado = await eventos.findByPk(id);
        
            res.status(200).json(eventoResultado);
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar evento', error });
        }
    }

    static deletarEvento = async (req, res) => {
        try{
            const id = req.params.id;

            await eventos.destroy({
                where: { id: id }
            });
        
            res.status(200).json({ message: 'Evento deletado com sucesso' });
        }
        catch (error) {
            res.status(500).json({ message: 'Erro ao deletar evento', error });
        }
    }

}

export default EventosController;
