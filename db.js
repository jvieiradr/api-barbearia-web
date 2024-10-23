import mysql from 'mysql';

const banco = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'barbearia'
});

export default banco;
