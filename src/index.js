/* eslint-env browser */
import React from 'react';
import { Provider } from 'react-redux';
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
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </Provider>;

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
