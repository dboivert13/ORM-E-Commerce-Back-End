// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}


Product.init(
   // define columns
  {
      product_name: 'Plain T-Shirt',
      price: 14.99,
      stock: 14,
      category_id: 1,
    },
    {
      product_name: 'Running Sneakers',
      price: 90.0,
      stock: 25,
      category_id: 5,
    },
    {
      product_name: 'Branded Baseball Hat',
      price: 22.99,
      stock: 12,
      category_id: 4,
    },
    {
      product_name: 'Top 40 Music Compilation Vinyl Record',
      price: 12.99,
      stock: 50,
      category_id: 3,
    },
    {
      product_name: 'Cargo Shorts',
      price: 29.99,
      stock: 22,
      category_id: 2,
    },
  
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    //avoid plurals on workbench with freezeTableName
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
