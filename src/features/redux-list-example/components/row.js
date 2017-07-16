import React from 'react';
import * as RepositoryModel from 'models/repository';

const Row = ({ repository }) =>
  <div>
    <div>
      {repository.fullName}
    </div>
    <div>
      {repository.description}
    </div>
  </div>;

Row.propTypes = {
  repository: RepositoryModel.PropTypes.isRequired
};

export default Row;
