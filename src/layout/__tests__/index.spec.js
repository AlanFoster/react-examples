/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import Layout from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const application = (
    <StaticRouter context={{}}>
      <Layout>
        <div>Hello</div>
      </Layout>
    </StaticRouter>
  );
  ReactDOM.render(application, div);
});
