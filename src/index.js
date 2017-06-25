/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Layout from './layout';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './styles.css';

const Application = () => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
