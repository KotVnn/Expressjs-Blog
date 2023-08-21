const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = mongoose.model(
	'Category',
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
		description: String,
		create: {
			require: true,
			default: new Date(),
			type: Date,
		},
		lastUpdate: [{
			require: true,
			type: Date,
		}],
		parent: [{
				type: Schema.Types.ObjectId,
				ref: 'Category',
			}],
		children: [{
				type: Schema.Types.ObjectId,
				ref: 'Category',
			}],
		keywords: [String],
	}));

module.exports = Category;
