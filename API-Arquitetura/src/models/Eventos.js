import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection.js';

const Eventos = sequelize.define('Eventos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    dataInicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dataFinal: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    idLocal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Locais', // Nome da tabela relacionada
            key: 'id', // Chave primária da tabela relacionada
        },
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categorias', // Nome da tabela relacionada
            key: 'id', // Chave primária da tabela relacionada
        },
    },
}, {
    tableName: 'eventos',
    timestamps: false,
});

export default Eventos;