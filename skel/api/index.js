import apiServer from 'saturn-framework/server/api';

import { apolloServer } from 'apollo-server';

import { schema, mocks } from './schema';

apiServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema,
  mocks,
}));

apiServer.start();
