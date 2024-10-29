import conexao from '../db.js';

const cadastrarCliente = (req, res) => {
    const nome =  req.body.nome;
    const telefone =  req.body.telefone;
    const cep = req.body.cep;
    const endereco = req.body.endereco;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const email = req.body.email;
    const dtnascimento = req.body.dtnascimento;
    const preferenciacorte = req.body.preferenciacorte;

    const query = 'INSERT INTO clientes (nome, telefone, cep, endereco, numero, bairro, cidade, email, dtnascimento, preferenciacorte) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';

    conexao.query(query, [nome, telefone, cep, endereco, numero, bairro, cidade, email, dtnascimento, preferenciacorte], (erro) => {
        if(erro) return res.status(400).json(erro);
        return res.status(200).json();
    });
};

export default cadastrarCliente;