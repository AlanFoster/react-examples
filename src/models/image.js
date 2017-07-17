import PropTypes from 'prop-types';

const ModelPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
});

export { ModelPropTypes as PropTypes };
