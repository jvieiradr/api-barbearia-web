import mysql from 'mysql';

const banco = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'barbearia'
});

export default banco;