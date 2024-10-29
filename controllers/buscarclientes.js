import conexao from '../db.js';

const buscarClientes = (req, res) => {
    const query = 'SELECT id as value, nome as label, telefone, email, preferenciacorte FROM clientes ORDER BY nome;'

    conexao.query(query, (err, data) => {
        if(err) return res.json('err');
        return res.json(data.rows);
    });
};

export default buscarClientes;