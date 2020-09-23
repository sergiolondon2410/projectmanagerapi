import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    business_id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.TEXT
    },
    category: {
        type: Sequelize.TEXT
    },
    note: {
        type: Sequelize.TEXT
    },
    image: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Product;