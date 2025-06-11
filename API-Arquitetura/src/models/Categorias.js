import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection.js'; // Ajuste o caminho conforme necessário

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(50), // Ajustado para VARCHAR(50)
        allowNull: false,
    },
}, {
    tableName: 'categorias',
    timestamps: false,
});

// Função para criar categorias padrão no banco de dados
const criarCategoriasPadrao = async () => {
    const categoriasPadrao = [
        { nome: 'Tecnologia' },
        { nome: 'Educação' },
        { nome: 'Saúde' },
        { nome: 'Esportes' },
        { nome: 'Entretenimento' },
    ];

    for (const categoria of categoriasPadrao) {
        await Categoria.findOrCreate({
            where: { nome: categoria.nome },
            defaults: categoria,
        });
    }
};

criarCategoriasPadrao().catch((err) => console.error('Erro ao criar categorias padrão:', err));

export default Categoria;