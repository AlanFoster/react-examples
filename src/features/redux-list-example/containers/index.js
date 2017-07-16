import Component from '../components';
import { connect } from 'react-redux';
import { getTopJavaScriptRepositories } from 'reducers/data/repositories';

const mapStateToProps = function(state) {
  return {
    repositories: state.data.repositories.items
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getData() {
      dispatch(getTopJavaScriptRepositories());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
