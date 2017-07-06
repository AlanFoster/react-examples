import React from 'react';
import PropTypes from 'prop-types';
import * as RepositoryModel from 'models/repository';

const ReduxListExample = ({ repositories }) =>
  <div>
    <h2>Top Repositories</h2>
    <pre>{JSON.stringify(repositories, null, 4)}</pre>
  </div>;

ReduxListExample.propTypes = {
  repositories: PropTypes.arrayOf(RepositoryModel.PropTypes).isRequired
};

export default ReduxListExample;
