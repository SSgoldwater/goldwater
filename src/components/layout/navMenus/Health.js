import React from 'react';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import styles from '../styles/NavigationStyles';

class Health extends React.Component {
  render() {
    return (
      <Popover
        style={ styles.menuStyle }
        open={ this.props.open }
        anchorEl={ this.props.anchorEl }
        anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
        onRequestClose={ this.props.onRequestClose }
        useLayerForClickAway={ false }
      >
        <Menu
          menuItemStyle={ styles.menuItemStyle }
        >
          <MenuItem 
            primaryText={ "Blogs" }
            id={ "Blogs" }
            onMouseEnter={ this.props.openSubMenu }
          />
          <MenuItem
            primaryText="News/Studies"
            onMouseEnter={ this.props.openSubMenu }
          />
          <MenuItem
            primaryText="Product Reviews"
            onMouseEnter={ this.props.openSubMenu }
          />
        </Menu>
      </Popover>
    )
  }
}

export default Health;
