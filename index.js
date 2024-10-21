import express from 'express';
import cors from 'cors';

import listarClientes from './controllers/listarclientes.js';

const api = express();
api.use(express.json());
api.use(cors());

const port = process.env.PORT || 8800;

api.listen(8080, () => {
    console.log('Servidor Iniciado...');
});

api.get('/listarclientes', listarClientes);

api.get("/", (req, res) => {
    return res.json('Deu Certo!');
});