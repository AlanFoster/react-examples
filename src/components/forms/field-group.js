import PropTypes from 'prop-types';
import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

const FieldGroup = function({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

FieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string
};

export default FieldGroup;
