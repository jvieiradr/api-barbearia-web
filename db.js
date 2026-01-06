import BancoPkg from 'pg';
const { Client } = BancoPkg;

const conexao = new Client({
    host: 'dpg-d5e2kf5actks73cfq2ig-a.oregon-postgres.render.com',
    user: 'barbearia_a9t7_user',
    password: 'A03qF2f4vnkTPhZU6V2vkMwsmBsQ0IX8',
    port: '5432',
    database: 'barbearia_a9t7',
    ssl: {
        rejectUnauthorized: false,
    }
});

conexao.connect()
    .then(() => console.log('Conexão com o Banco Realizada com Sucesso.'))
    .catch((erro) => console.log('Erro ao se Conectar com o Banco de Dados.' + erro));

export default conexao;
