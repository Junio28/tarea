const Sequelize = require('sequelize');
const  {sequelize}  = require('../database/db');

const TypeProduct = sequelize.define('type_product', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = TypeProduct
