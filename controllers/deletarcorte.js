import conexao from '../db.js';

const deletarCorte = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM cortes WHERE id=$1;';

    conexao.query(query, [id], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default deletarCorte;