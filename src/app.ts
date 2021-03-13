import 'reflect-metadata';
import * as path from 'path';
import {GraphQLSchema} from 'graphql';
import {buildSchema} from 'type-graphql';
import {ApolloServer} from "apollo-server-express";
import * as express from 'express';
import {Express} from 'express';
import {Firestore} from "@google-cloud/firestore";
import * as fireorm from 'fireorm';
import authentication from "./resolvers/authentication";
import authorization from "./resolvers/authorization";

const createSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [`${__dirname}/resolvers/**/*.resolver.ts`],
    emitSchemaFile: path.resolve(__dirname, '../', 'schema.graphql'),
    dateScalarMode: 'isoDate',
    authChecker: authorization,
  });
};

export const createApolloServer = async (): Promise<ApolloServer> => {
  fireorm.initialize(new Firestore());
  const schema = await createSchema();

  return new ApolloServer({
    schema,
    context: ({req}: any) => req?.locals,
    playground: true,
    introspection: true,
  });
};

export const createExpressServer = async (): Promise<Express> => {
  const app = express();

  app.use(authentication);

  const apolloServer = await createApolloServer();
  app.use(apolloServer.getMiddleware());

  return app;
};
