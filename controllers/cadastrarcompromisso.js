import conexao from '../db.js';

const cadastrarCompromisso = (req, res) => {
    const data = req.body.data;
    const compromisso = req.body.compromisso;
    const hora = req.body.hora;

    const query = 'INSERT INTO agenda (data, compromisso, hora) VALUES ($1, $2, $3);';
    conexao.query(query, [data, compromisso, hora], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default cadastrarCompromisso;