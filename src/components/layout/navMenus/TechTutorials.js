import React from 'react';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavigationStyles';

class TechTutorials extends React.Component {
  render() {
    return (
      <Popover
        style={ styles.menuStyle }
        open={ this.props.open }
        anchorEl={ this.props.anchorEl }
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        useLayerForClickAway={ false }
      >
        <Menu
          menuItemStyle={ styles.menuItemStyle }
        >
          <MenuItem 
            primaryText="Command Line"
            containerElement={ <NavLink to={ "/posts/cmdline_tutorials" }/> }
          />
          <MenuItem
            primaryText="Node"
            containerElement={ <NavLink to={ "/posts/node_tutorials" }/> }
          />
          <MenuItem
            primaryText="React"
            containerElement={ <NavLink to={ "/posts/react_tutorials" }/> }
          />
        </Menu>
      </Popover>
    )
  }
}

export default TechTutorials;
