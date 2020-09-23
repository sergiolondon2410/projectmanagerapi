import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';

console.log(env);
if (env === 'development') {
    var db_host = 'localhost';
    var db_name = 'azytana_qqrcomer';
    var db_user = 'user1';
    var db_password = 'password1';
} else {
    var db_host = 'ec2-34-235-62-201.compute-1.amazonaws.com';
    var db_name = 'd8ocr9s9ndk0oe';
    var db_user = 'nxtbunyubzbtru';
    var db_password = 'c8e815461027776ded319266a84d369ea883a3dd990c2ed73e777fa50053f619';
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