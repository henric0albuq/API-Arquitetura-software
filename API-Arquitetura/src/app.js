import express from 'express';
import db from './config/dbConnection.js'; // Importa a conexão configurada
import routes from './routes/index.js';

const app = express();
app.use(express.json());

// Testando a conexão com o banco de dados
db.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

// Configurando as rotas
routes(app);

export default app;