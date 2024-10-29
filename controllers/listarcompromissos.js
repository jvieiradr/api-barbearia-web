import conexao from '../db.js';

const listarCompromissos = (req, res) => {
    const data = req.params.data;
    const query = "SELECT *, to_char(data, 'DD/MM/YYYY') AS data_formatada FROM agenda WHERE data=$1 ORDER BY hora;";

    conexao.query(query, [data], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data.rows);
    });
};

export default listarCompromissos;