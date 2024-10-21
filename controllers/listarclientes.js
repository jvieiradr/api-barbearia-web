import banco from '../db.js';

const listarClientes = (req, res) => {
/*    const query = 'SELECT * FROM barbearia.clientes ORDER BY nome;'

    banco.query(query, (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data);
    });*/
    return res.json('Passou aqui');
};

export default listarClientes;