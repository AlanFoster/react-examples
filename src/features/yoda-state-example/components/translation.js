import PropTypes from 'prop-types';
import React from 'react';

const Translation = ({ value }) => {
  if (!value) return null;
  if (value instanceof Error) {
    return <div>There was an error translating - please try again!</div>;
  }

  return (
    <div>
      {value}
    </div>
  );
};

Translation.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Error)])
};

export default Translation;
