import banco from '../db.js';

const listarClientes = (req, res) => {
    const query = 'SELECT * FROM barbearia.clientes ORDER BY nome;'

    banco.query(query, (erro, data) => {
        if(erro) return res.status(400).json('passei erros');
        return res.status(200).json('passei dados');
    });
};

export default listarClientes;