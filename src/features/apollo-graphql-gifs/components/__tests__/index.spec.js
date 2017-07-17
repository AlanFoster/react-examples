/* eslint-env browser */
import React from 'react';
import ImageList from '../';
import { mount } from 'enzyme';

it('renders loading text when there are no images', function() {
  const wrapper = mount(<ImageList images={undefined} />);

  expect(wrapper).toIncludeText('Infinite Cats!');
  expect(wrapper).toIncludeText('Loading...');
});

it('renders when there are available images', function() {
  const images = [
    {
      id: '1',
      url: 'http://example.com/',
      width: 200,
      height: 300
    }
  ];

  const wrapper = mount(<ImageList images={images} />);

  expect(wrapper).toIncludeText('Infinite Cats!');
  expect(wrapper).not.toIncludeText('Loading...');
});
