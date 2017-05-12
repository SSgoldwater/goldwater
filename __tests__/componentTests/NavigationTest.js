import React from 'react';
import Navigation from '../../src/components/layout/Navigation';

test('Navigation', () => {
  it('initializes with correct state', () => {
    const navigation = mount(<Navigation/>);

    expect(navigation.state()).toMatchSnapShot();
  });
});

