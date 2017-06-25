/* eslint-env browser */
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../';

it('renders the api text', () => {
  const component = renderer.create(<Home />);

  expect(component).toMatchSnapshot();
});
