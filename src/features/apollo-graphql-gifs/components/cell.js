import React from 'react';
import PropTypes from 'prop-types';
import * as ImageModel from 'models/image';

const Cell = ({ style, image }) =>
  <div style={style}>
    <img
      src={image.url}
      alt="Giphy Cat"
      style={{
        width: image.width,
        height: image.height
      }}
    />
  </div>;

Cell.propTypes = {
  image: ImageModel.PropTypes.isRequired,
  style: PropTypes.object
};

export default Cell;
