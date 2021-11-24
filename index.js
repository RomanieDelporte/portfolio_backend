/** @format */

const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv").config();
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const {
	ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const openMongoDB = () => {
	return new Promise((resolve, reject) => {
		mongoose.connect(process.env.MONGO_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		});
		mongoose.connection.on("error", (e) => reject(e.message));
		mongoose.connection.once("open", () => resolve());
	});
};

const startServer = () => {
	return new Promise((resolve, reject) => {
		// create an apollo server instance
		const server = new ApolloServer({
			typeDefs,
			resolvers,
			introspection: true,
			playground: true,
			cors: true,
			plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // this is the most important thing

			context: ({ req }) => {
				// in de headers zit u json web token
				//  als je de decodedtoken zou opvragen in je console zal je zien wier er ingelogt is zo niet ga weg en log opnieuw in
				const authHeader = req.headers["authorization"];
				const token = authHeader && authHeader.split(" ")[1];
				try {
					const decodedToken = jwt.verify(token, process.env.TOKEN_SALT);
					return decodedToken && decodedToken.userId
						? { userId: decodedToken.userId }
						: { userId: null };
					console.log(decodedToken);
				} catch (e) {
					console.log(e.message);
				}
			},
		});

		server
			.listen({ port: process.env.PORT || process.env.GRAPHQL_PORT || 4000 })
			.then(({ url }) => {
				resolve(url);
			});
	});
};

/**
 * Start the api
 */

openMongoDB()
	.then(startServer)
	.then((url) => console.log(`Server started at ${url}`))
	.catch((e) => console.error(e));
