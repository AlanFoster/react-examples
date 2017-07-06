import Component from '../components';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    repositories: state.data.repositories.items
  };
};

const mapDispatchToProps = function() {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
