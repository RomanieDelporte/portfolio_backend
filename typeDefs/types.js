/** @format */

const { gql } = require("apollo-server");

module.exports = gql`
	type Project {
		id: ID
		title: String
		image: String
		githubUrl: String
		about: String
		technologies: [Technologie]
	}

	type Technologie {
		title: String
	}

	type Technologies {
		title: String
		image: String
	}
`;
