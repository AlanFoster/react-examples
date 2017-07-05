/* eslint-env browser */
import React from 'react';
import renderer from 'react-test-renderer';
import TranslationForm from '../';

it('renders the translation form', () => {
  const onTranslation = function() {
    /* noop */
  };

  const onChange = function() {
    /* noop */
  };

  const component = renderer.create(
    <TranslationForm
      onTranslate={onTranslation}
      onChange={onChange}
      sentence={'sentence text'}
      translation={'translation text'}
      isTranslating={true}
    />
  );

  expect(component).toMatchSnapshot();
});
