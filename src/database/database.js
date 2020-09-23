import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';

console.log(env);
if (env === 'development') {
    var db_host = 'localhost';
    var db_name = 'azytana_qqrcomer';
    var db_user = 'user1';
    var db_password = 'password1';
} else {
    var db_host = '';
    var db_name = 'd';
    var db_user = 'nx';
    var db_password = '19';
};


export const sequelize = new Sequelize(
    db_name,
    db_user,
    db_password,
    {
        host: db_host,
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