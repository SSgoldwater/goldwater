import React from 'react';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
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
      
          />
          <MenuItem
            primaryText="Node"
          />
          <MenuItem
            primaryText="React"
          />
        </Menu>
      </Popover>
    )
  }
}

export default TechTutorials;
