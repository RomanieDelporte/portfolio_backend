/** @format */

const { AuthenticationError } = require("apollo-server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Project, Technologie } = require("../mongo/models");

module.exports = {
	Query: {
		projects: () => Project.find(),
		project: (parent, { id }) => Project.findOne({ _id: id }),
		technologies: () => Technologie.find(),
		technologie: (parent, { id }) => Technologie.findOne({ _id: id }),
	},
};
