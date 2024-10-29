import express from 'express';
import cors from 'cors';

import listarClientes  from './controllers/listarclientes.js';
import buscarClientes  from './controllers/buscarclientes.js';
import buscarClientesAniversariantes from './controllers/buscarclientesaniversariantes.js';
import cadastrarCliente from './controllers/cadastrarcliente.js';
import deletarCliente from './controllers/deletarcliente.js';
import alterarCliente from './controllers/alterarcliente.js';

import listarCortes from './controllers/listarcortes.js';
import cadastrarCorte from './controllers/cadastrarcorte.js';
import alterarCorte from './controllers/alterarcorte.js';
import deletarCorte from './controllers/deletarcorte.js';
import relatorioCortesData from './controllers/relatoriocortesdata.js';

import listarCompromissos from './controllers/listarcompromissos.js';
import cadastrarCompromisso from './controllers/cadastrarcompromisso.js';
import alterarCompromisso from './controllers/alterarcompromisso.js';
import deletarCompromisso from './controllers/deletarcompromisso.js';

import enviarMala from './controllers/enviarmala.js';

const api = express();
api.use(express.json());
api.use(cors());

const port = process.env.PORT || 8800;

api.listen(port, () => {
    console.log('Servidor Iniciado...');
});

api.get('/listarclientes', listarClientes);
api.get('/buscarclientes', buscarClientes);
api.get('/buscarclientesaniversariantes/:mes', buscarClientesAniversariantes);
api.get ('/listarcortes/:idcliente', listarCortes);
api.get ('/relatoriocortesdata/:dtinicial/:dtfinal', relatorioCortesData);
api.get ('/listarcompromissos/:data', listarCompromissos);

api.post ('/cadastrarcliente', cadastrarCliente);
api.post ('/cadastrarcorte', cadastrarCorte);
api.post ('/cadastrarcompromisso', cadastrarCompromisso);

api.post ('/enviarmala', enviarMala);

api.put ('/alterarcliente', alterarCliente);
api.put ('/alterarcorte', alterarCorte);
api.put ('/alterarcompromisso', alterarCompromisso);

api.delete('/deletarcliente/:id', deletarCliente);
api.delete('/deletarcorte/:id', deletarCorte);
api.delete('/deletarcompromisso/:id', deletarCompromisso);

api.get("/", (req, res) => {
    return res.json('Rodando...');
});