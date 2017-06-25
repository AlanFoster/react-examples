/* eslint-env browser */
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../';

it('renders the button', () => {
  const component = renderer.create(<Button>Hello world</Button>);

  expect(component).toMatchSnapshot();
});
