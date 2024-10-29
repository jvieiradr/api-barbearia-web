import conexao from '../db.js';

const buscarClientesAniversariantes = (req, res) => {
    const mes = req.params.mes;
    const query = 'SELECT * FROM clientes WHERE extract(month from dtnascimento) = $1 ORDER BY extract (DAY from dtnascimento);';

    conexao.query(query, [mes], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data.rows);
    });
};

export default buscarClientesAniversariantes;