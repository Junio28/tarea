const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const SaleProduct = sequelize.define('saleproduct', {

  date_sale: {
    type: Sequelize.DATE,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.FLOAT,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

module.exports = SaleProduct
