/** @format */

const mongoose = require("mongoose");

const ProjectSchema = require("./schemas/project");
const TechnologieSchema = require("./schemas/technologie");

const Project = mongoose.model("Project", ProjectSchema);
const Technologie = mongoose.model("Technologie", TechnologieSchema);

module.exports = {
	Project,
	Technologie,
};
