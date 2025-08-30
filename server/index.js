import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema.js';

async function startServer() {
  const app = express();

  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(8080, () => {
    console.log(
      `GraphQL server ready at http://localhost:8080${server.graphqlPath}...`
    );
  });
}

startServer();
