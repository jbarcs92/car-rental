// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const Car = require('./models/car');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;