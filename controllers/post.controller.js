const db = require('../models');
const Cate = require('./cate.controller');

const latestPost = limit => {
	return db.post.find().sort({_id: -1}).limit(limit ? limit : 5);
}

const getByAlias = alias => {
	return db.post.findOne({alias});
}

const getByCate = async aliasCate => {
	const cate = await Cate.getByAlias(aliasCate);
	const posts = await db.post.find({categories: {$in:[cate._id]}});
	return {cate, posts};
}

module.exports = {
	latestPost,
	getByAlias,
	getByCate
}
