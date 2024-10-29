import conexao from '../db.js';

const deletarCompromisso = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM agenda WHERE id = $1;';

    conexao.query(query, [id], (erro) => {
        if(erro) return res.status(400).json()
        return res.status(200).json();
    });
};

export default deletarCompromisso;