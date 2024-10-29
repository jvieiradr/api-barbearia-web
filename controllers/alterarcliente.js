import conexao from '../db.js';

const alterarCliente = (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const endereco = req.body.endereco;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const email = req.body.email;
    const dtnascimento = req.body.dtnascimento;
    const preferenciacorte = req.body.preferenciacorte;

    const query = 'UPDATE clientes SET nome=$1, telefone=$2, cep=$3, endereco=$4, numero=$5, bairro=$6, cidade=$7, email=$8, dtnascimento=$9, preferenciacorte=$10 WHERE id=$11;';

    conexao.query(query, [nome, telefone, cep, endereco, numero, bairro, cidade, email, dtnascimento, preferenciacorte, id], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default alterarCliente;