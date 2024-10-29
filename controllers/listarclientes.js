import conexao from '../db.js';

const listarClientes = (req, res) => {
    const query = 'SELECT * FROM clientes ORDER BY nome;';

    conexao.query(query, (err, data) => {
        if (err) return res.json('Erro ao executar a operação.');
        return res.status(200).json(data.rows)
});

};

export default listarClientes;
