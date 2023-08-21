const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = mongoose.model(
	'Post',
	new mongoose.Schema({
		title: {
			require: true,
			type: String,
		},
		alias: {
			unique: true,
			require: true,
			type: String,
		},
		categories: [{
			type: Schema.Types.ObjectId,
			ref: 'Category',
		}],
		create: {
			require: true,
			default: new Date(),
			type: Date,
		},
		lastUpdate: [{
			require: true,
			type: Date,
		}],
		content: {
			require: true,
			default: 'Updating...',
			type: String,
		},
		keywords: [String],
		views: {
			require: true,
			default: 0,
			type: Number,
		},
		like: {
			require: true,
			default: 0,
			type: Number,
		},
		disLike: {
			require: true,
			default: 0,
			type: Number,
		},
	}));

module.exports = Post;
