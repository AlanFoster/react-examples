/* eslint-env browser */
import React from 'react';
import renderer from 'react-test-renderer';
import Translation from '../translation';

describe('translation', function() {
  describe('when the translation is not present', function() {
    it('renders no element', () => {
      const component = renderer.create(<Translation value={undefined} />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('when the translation is a string', function() {
    it('renders the hello text', () => {
      const component = renderer.create(<Translation value="hello" />);

      expect(component).toMatchSnapshot();
    });
  });

  describe('when the translation is an error', function() {
    it('renders a generic error', () => {
      const component = renderer.create(
        <Translation value={new Error('broken')} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
