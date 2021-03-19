const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
    // define columns
    {
      product_id: 1,
      tag_id: 6,
    },
    {
      product_id: 1,
      tag_id: 7,
    },
    {
      product_id: 1,
      tag_id: 8,
    },
    {
      product_id: 2,
      tag_id: 6,
    },
    {
      product_id: 3,
      tag_id: 1,
    },
    {
      product_id: 3,
      tag_id: 3,
    },
    {
      product_id: 3,
      tag_id: 4,
    },
    {
      product_id: 3,
      tag_id: 5,
    },
    {
      product_id: 4,
      tag_id: 1,
    },
    {
      product_id: 4,
      tag_id: 2,
    },
    {
      product_id: 4,
      tag_id: 8,
    },
    {
      product_id: 5,
      tag_id: 3,
    },

  {
     // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
     //avoid plurals on workbench with freezeTableName
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
    freezeTableName: true
  }
);

module.exports = ProductTag;
