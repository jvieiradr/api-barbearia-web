import banco from '../db.js';

const listarClientes = (req, res) => {
    const mysql_query = 'SELECT * FROM barbearia.clientes ORDER BY nome;';

    banco.query(mysql_query, (err, data) => {
        if(err) return res.status(400).json(err);
        return res.status(200).json(data);
    });
};

export default listarClientes;
