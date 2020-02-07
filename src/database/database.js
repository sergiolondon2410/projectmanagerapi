import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'nodeapi',
    'postgres',
    'r3c0rd',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);