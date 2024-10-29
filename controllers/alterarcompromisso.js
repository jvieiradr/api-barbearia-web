import conexao from '../db.js';

const alterarCompromisso = (req, res) => {
    const id = req.body.id;
    const data = req.body.data;
    const compromisso = req.body.compromisso;
    const hora = req.body.hora;

    const query = 'UPDATE agenda SET data=$1, compromisso=$2, hora=$3 WHERE id=$4;';

    conexao.query(query, [data, compromisso, hora, id], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default alterarCompromisso;