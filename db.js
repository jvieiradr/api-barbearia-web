import BancoPkg from 'pg';
const { Client } = BancoPkg;

const conexao = new Client({
    host: 'shortly-committed-spitz.data-1.use1.tembo.io',
    user: 'postgres',
    password: 'pFqpP6EntDBNSwOO',
    port: '5432',
    database: 'barbearia',
    ssl: {
        rejectUnauthorized: false,
    }

  /*host: 'localhost',
    user: 'postgres',
    password: 'password',
    port: '5432',
    database: 'barbearia'
    */
});

conexao.connect()
    .then(() => console.log('Conexão com o Banco Realizada com Sucesso.'))
    .catch((erro) => console.log('Erro ao se Conectar com o Banco de Dados.' + erro));

export default conexao;
