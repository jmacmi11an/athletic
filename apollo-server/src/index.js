const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { ArticleDataSource } = require('./datasources/articleDataSource');
const { AuthorDataSource } = require('./datasources/authorDataSource');
const { LeagueDataSource } = require('./datasources/leagueDataSource');
const { TeamDataSource } = require('./datasources/teamDataSource');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      articleDataSource: new ArticleDataSource(),
      authorDataSource: new AuthorDataSource(),
      leagueDataSource: new LeagueDataSource(),
      teamDataSource: new TeamDataSource(),
    };
  },
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
