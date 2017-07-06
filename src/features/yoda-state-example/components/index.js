import PropTypes from 'prop-types';
import React from 'react';
import { Button, FieldGroup } from 'components/forms';
import Translation from './translation';

const TranslationForm = ({
  isTranslating,
  onTranslate,
  onChange,
  sentence,
  translation
}) =>
  <div>
    <form onSubmit={onTranslate}>
      <FieldGroup
        label="Translation text"
        type="text"
        value={sentence}
        onChange={onChange}
        disabled={isTranslating}
      />

      <Button type="submit" disabled={isTranslating}>
        Translate!
      </Button>
    </form>

    <Translation value={translation} />
  </div>;

TranslationForm.propTypes = {
  isTranslating: PropTypes.bool.isRequired,
  onTranslate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  sentence: PropTypes.string.isRequired,
  translation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Error)
  ])
};

export default TranslationForm;
