import conexao from '../db.js';

const cadastrarCorte = (req, res) => {
    const idcliente = req.body.idcliente;
    const nomecliente = req.body.nomecliente;
    const telefonecliente = req.body.telefonecliente;
    const dtcorte = req.body.dtcorte;
    const valor = req.body.valor;
    const tipocorte = req.body.tipocorte;

    const query = 'INSERT INTO cortes (idcliente, nomecliente, telefonecliente, dtcorte, valor, tipocorte) VALUES ($1, $2, $3, $4, $5, $6);';

    conexao.query(query, [idcliente, nomecliente, telefonecliente, dtcorte, valor, tipocorte], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default cadastrarCorte;