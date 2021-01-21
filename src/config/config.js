// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-813a8ff2585fa7881258f5b1fa453eb3eeacf748.ccpvkm0tewwo.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: ')K,kE7(|0LgI{!f8dH$CR8_faiuAMV;*'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}