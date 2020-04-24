// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Projects from './Projects';

describe('Projects', () => {
  const props = {
    projects: [
      {
        name: 'Item 0',
      },
      {
        name: 'Item 1',
      }
    ]
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Projects {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
