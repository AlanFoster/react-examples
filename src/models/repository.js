import PropTypes from 'prop-types';

const ModelPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired
});

export { ModelPropTypes as PropTypes };
