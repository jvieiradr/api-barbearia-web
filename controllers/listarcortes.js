import conexao from '../db.js';

const listarCortes = (req, res) => {
    const idcliente = req.params.idcliente;
    const query = 'SELECT * FROM cortes WHERE idCliente=$1 ORDER BY dtcorte;'

    conexao.query(query, [idcliente], (erro, data) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json(data.rows);
    });
};

export default listarCortes;