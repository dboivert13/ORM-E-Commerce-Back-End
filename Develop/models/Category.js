const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create a new Sequelize model for Category
class Category extends Model {}

Category.init(
 // define columns
  {
        category_name: 'Shirts',
      },
      {
        category_name: 'Shorts',
      },
      {
        category_name: 'Music',
      },
      {
        category_name: 'Hats',
      },
      {
        category_name: 'Shoes',
      },
  

  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    //avoid plurals on workbench with freezeTableName
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
