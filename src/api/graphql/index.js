import { ApolloClient, createNetworkInterface } from 'react-apollo';
import environment from 'environment';

const { endpoint } = environment.graphql;

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: endpoint
  })
});

export default client;
