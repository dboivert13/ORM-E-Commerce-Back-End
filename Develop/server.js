const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// Import model to sync table with database
const Category = require('./models/Category');
// const index = require('./models/index');
const Product = require('./models/Product');
const ProductTag = require('./models/ProductTag');
const Tag = require('./models/Tag');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// // sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
