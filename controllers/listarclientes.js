// import banco from '../db.js';

const listarClientes = (req, res) => {
    const query = 'SELECT * FROM barbearia.clientes ORDER BY nome;'
    return res.json('Passei aqui')
};

export default listarClientes;
