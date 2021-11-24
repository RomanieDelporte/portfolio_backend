/** @format */

const mongoose = require("mongoose");

const TechnologieSchema = require("./technologie");

const ProjectSchema = new mongoose.Schema({
	title: String,
	image: String,
	githubUrl: String,
	about: String,
	technologies: [TechnologieSchema],
});

module.exports = ProjectSchema;
