import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection.js';

const Evento = sequelize.define('Evento', {
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
            model: 'locais', // nome da tabela no banco (minúsculo por padrão)
            key: 'id',
        },
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
        references: {
            model: 'categorias', // nome da tabela no banco (minúsculo por padrão)
            key: 'id',
        },
    },
}, {
    tableName: 'eventos',
    timestamps: false,
    
});

export default Evento;
