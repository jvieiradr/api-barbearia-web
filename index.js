import express from 'express';
import cors from 'cors';

import listarClientes from './controllers/listarclientes.js';

const api = express();
api.use(express.json());

const corsConfig = {
    origin: '',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

const port = process.env.PORT || 8800;

api.listen(8800, () => {
    console.log('Servidor Iniciado...');
});

api.get('/listarclientes', listarClientes);

api.get("/", (req, res) => {
    return res.json('Deu Certo!');
});