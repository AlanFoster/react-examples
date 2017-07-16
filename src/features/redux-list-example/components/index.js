import React from 'react';
import PropTypes from 'prop-types';
import * as RepositoryModel from 'models/repository';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import Row from './row';
import './styles.css';

class ReduxListExample extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  rowRenderer({ index, key, style }) {
    return (
      <div key={key} style={style} className="repositories__row">
        <Row key={key} repository={this.props.repositories[index]} />
      </div>
    );
  }

  render() {
    const { repositories } = this.props;

    return (
      <div>
        <h2>Top Repositories</h2>
        <AutoSizer disableHeight>
          {({ width }) =>
            <List
              className="repositories"
              height={300}
              width={width}
              rowCount={repositories.length}
              rowHeight={70}
              rowRenderer={this.rowRenderer}
            />}
        </AutoSizer>
      </div>
    );
  }
}

ReduxListExample.propTypes = {
  repositories: PropTypes.arrayOf(RepositoryModel.PropTypes).isRequired,
  getData: PropTypes.func.isRequired
};

export default ReduxListExample;
