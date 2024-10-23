import mysql from 'mysql';

const banco = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'barbearia'
});

export default banco;
