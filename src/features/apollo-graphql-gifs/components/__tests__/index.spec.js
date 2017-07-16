/* eslint-env browser */
import React from 'react';
import ImageList from '../';
import renderer from 'react-test-renderer';

it('renders the image list', () => {
  const component = renderer.create(<ImageList />);

  expect(component).toMatchSnapshot();
});
