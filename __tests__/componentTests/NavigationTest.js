import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { shallow, mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import muiTheme from '../../src/utils/Theme';
import Navigation from '../../src/components/layout/Navigation';

injectTapEventPlugin();

const mountOptions = {
  context: {muiTheme},
  contextTypes: { muiTheme: PropTypes.object },
  childContextTypes: { muiTheme: PropTypes.object }
}

const _navigation = (
  <Router>
    <Navigation />
  </Router>
);

test('Navigation initializes with proper state', () => {
  const navigation = mount(_navigation, mountOptions);

  expect(navigation.find(Navigation).node.state).toMatchSnapshot();

  const _2navigation = shallow(<Navigation />);
  _2navigation.instance()._openUserMenu({currentTarget: "hello", preventDefault: () =>  null});

  expect(_2navigation.state()).toMatchSnapshot();
});

