import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

// Lista de servidores da API
const servers = ['http://localhost:3000', 'http://localhost:3001'];

let current = 0;

// Função de balanceamento (Round Robin)
function getServer() {
  const server = servers[current];
  current = (current + 1) % servers.length;
  return server;
}

// Middleware para rotear qualquer requisição
app.use('/', async (req, res) => {
  const path = req.originalUrl; // pega toda a rota após o domínio
  const target = getServer();
  const url = `${target}${path}`;

  try {
    const response = await axios({
      method: req.method,
      url: url,
      params: req.query,
      data: req.body,
      headers: req.headers,
    });

    res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send('Erro no Gateway');
    }
  }
});

// Inicia o Gateway
app.listen(8080, () => {
  console.log('🚀 API Gateway com balanceamento rodando na porta 8080');
});

