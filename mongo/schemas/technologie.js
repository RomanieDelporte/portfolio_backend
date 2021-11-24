/** @format */

const mongoose = require("mongoose");

const TechnologieSchema = new mongoose.Schema({
	title: String,
	image: String,
});

module.exports = TechnologieSchema;
