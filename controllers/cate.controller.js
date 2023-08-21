const db = require('../models');

const allCate = () => {
	return db.category.find();
}

const getByAlias = alias => {
	return db.category.findOne({alias: alias.toLowerCase()});
}

module.exports = {
	allCate,
	getByAlias
}
