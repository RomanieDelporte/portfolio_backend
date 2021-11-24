/** @format */

const { gql } = require("apollo-server");

module.exports = gql`
	type Mutation {
		addProject(project: ProjectInput): Project
		addTechnologie(technologie: TechnologieInput): Technologie
	}
`;
