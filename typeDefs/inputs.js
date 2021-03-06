/** @format */

const { gql } = require("apollo-server");

module.exports = gql`

	input ProjectInput {
		title: String
		image: String
		githubUrl: String
		about: String
		technologies: [TechnologieInput]
	}

	input TechnologieInput {
		title: String
		image: String
	}
`;
