/** @format */

const { gql } = require("apollo-server");

module.exports = gql`
	type Query {
		projects: [Project]
		project(id:ID): Project
		technologies: [Technologies]
		technologie(id: ID): Technologie
	}
`;
