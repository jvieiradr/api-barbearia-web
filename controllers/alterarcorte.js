import conexao from '../db.js';

const alterarCorte = (req, res) => {
    const dtcorte = req.body.dtcorte;
    const valor = req.body.valor;
    const tipocorte = req.body.tipocorte;
    const idcorte = req.body.idcorte;

    const query = 'UPDATE cortes SET dtCorte=$1, valor=$2, tipoCorte=$3 WHERE id=$4;';

    conexao.query(query, [dtcorte, valor, tipocorte, idcorte], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default alterarCorte;