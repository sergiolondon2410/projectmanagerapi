import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Product from './Product';

const Business = sequelize.define('Businesses', {
    id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.TEXT
    },
    logo: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    address: {
        type: Sequelize.TEXT
    },
    qr_code: {
        type: Sequelize.TEXT
    },
    contact: {
        type: Sequelize.TEXT
    },
    web_page: {
        type: Sequelize.TEXT
    },
    cover_image: {
        type: Sequelize.TEXT
    },
    primary_color: {
        type: Sequelize.TEXT
    },
    second_color: {
        type: Sequelize.TEXT
    },
    note: {
        type: Sequelize.TEXT
    },
    image: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: true
});

Business.hasMany(Product, {foreingKey: 'business_id', sourceKey: 'id'});
Product.belongsTo(Business, {foreingKey: 'business_id', sourceKey: 'id'});

export default Business;