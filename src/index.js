/* eslint-env browser */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from 'api/graphql';
import createStore from './create-store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';

const store = createStore();

const Application = () =>
  <ApolloProvider client={client} store={store}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </ApolloProvider>;

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
