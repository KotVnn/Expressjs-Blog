const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.post = require('./post.model');
db.category = require('./category.model');

module.exports = db;
