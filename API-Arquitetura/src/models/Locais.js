import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection.js';


const Locais = sequelize.define('Locais', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'locais',
    timestamps: false, // Desabilita createdAt e updatedAt
});

export default Locais;