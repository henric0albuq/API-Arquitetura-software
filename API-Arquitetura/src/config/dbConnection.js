import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres', // database
  'postgres.itkxdvujyatyswqtukon', // user
  'Davi12345!@$arquitetura', // Senha
  {
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    port: 6543,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // importante para conexão com Supabase
      },
    },
    pool: {
      max: 15,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco realizada com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco:', err);
  });

export default sequelize;