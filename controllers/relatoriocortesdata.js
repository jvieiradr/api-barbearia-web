import conexao from '../db.js';

const relatorioCortesData = (req, res) => {
    const dtinicial = req.params.dtinicial;
    const dtfinal = req.params.dtfinal;
    const query = "SELECT *, to_char(dtcorte, 'DD/MM/YYYY') AS data_formatada FROM cortes WHERE dtcorte BETWEEN $1 AND $2;";

    conexao.query(query, [dtinicial, dtfinal], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data.rows);
    });
};

export default relatorioCortesData;