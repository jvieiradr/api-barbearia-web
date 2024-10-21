import banco from '../db.js';

const listarClientes = (req, res) => {
    const query = 'SELECT * FROM barbearia.clientes ORDER BY nome;'

    banco.query(query, (erro, data) => {
        if(erro) return res.json('passei erros');
        return res.json('passei dados');
    });
};

export default listarClientes;