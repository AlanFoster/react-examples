/* eslint-env browser */
import React from 'react';
import renderer from 'react-test-renderer';
import ReduxListExample from '../';

jest.mock('react-virtualized/dist/commonjs/AutoSizer', function() {
  return function(props) {
    const renderCallback = props.children;

    return renderCallback({
      width: 600
    });
  };
});

it('renders the given repositories', () => {
  const repositories = [
    {
      id: 1,
      fullName: 'full-name-1',
      description: 'description-1',
      htmlUrl: 'html-url-1'
    },
    {
      id: 2,
      fullName: 'full-name-2',
      description: 'description-2',
      htmlUrl: 'html-url-2'
    }
  ];

  const getData = jest.fn();

  const component = renderer.create(
    <ReduxListExample repositories={repositories} getData={getData} />
  );

  expect(component).toMatchSnapshot();
  expect(getData).toHaveBeenCalled();
});
