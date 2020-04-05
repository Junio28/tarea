const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const TypeProduct = require('./TypeProduct')
const Product = sequelize.define('product', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  mark: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, 
{
  timestamps: true
});

TypeProduct.hasMany(Product, { foreinkey: 'productId', sourceKey: 'id' });
Product.belongsTo(TypeProduct, { foreinkey: 'typeProductId', targetId: 'id' });

module.exports = Product
