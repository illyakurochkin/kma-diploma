import 'reflect-metadata';
import * as path from 'path';
import {GraphQLSchema} from 'graphql';
import {buildSchema} from 'type-graphql';
import {ApolloServer} from "apollo-server-express";
import * as express from 'express';
import {Express} from 'express';

const createSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [`${__dirname}/resolvers/**/*.resolver.ts`],
    emitSchemaFile: path.resolve(__dirname, '../', 'schema.graphql'),
    dateScalarMode: 'isoDate',
  });
};

export const createApolloServer = async (): Promise<ApolloServer> => {
  const schema = await createSchema();

  return new ApolloServer({
    schema,
    playground: true,
    introspection: true,
  });
};

export const createExpressServer = async (): Promise<Express> => {
  const app = express();

  const apolloServer = await createApolloServer();
  app.use(apolloServer.getMiddleware());

  return app;
};
