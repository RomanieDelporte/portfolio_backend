/** @format */

const { ApolloError, AuthenticationError } = require("apollo-server");
const bcrypt = require("bcrypt");

const { Project, Technologie } = require("../mongo/models");

module.exports = {
	Mutation: {
		addProject: async (parent, { project }, context) => {
			try {
				return await Project.create({
					...project,
					technologies: [],
				});
			} catch (e) {
				if (e.extensions.code === "UNAUTHENTICATED") throw e;
				else throw new ApolloError(e.message);
			}
		},
		addTechnologie: async (parent, { technologie }, context) => {
			try {
				return await Technologie.create({
					...technologie,
				});
			} catch (e) {
				if (e.extensions.code === "UNAUTHENTICATED") throw e;
				else throw new ApolloError(e.message);
			}
		},
	},
};
