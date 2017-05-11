import React from 'react';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavigationStyles';

class Tech extends React.Component {
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
            primaryText={ "Tutorials" }
            id={ "Tutorials" }
            containerElement={ <NavLink to={ "/posts/tech_tutorials" }/> }
            onMouseEnter={ this.props.openSubMenu }
            onTouchTap={ this.props.closeNav }
          />
          <MenuItem
            primaryText={ "Blogs" }
            containerElement={ <NavLink to={ "/posts/tech_blogs" }/> }
            onMouseEnter={ this.props.openSubMenu }
            onTouchTap={ this.props.closeNav }
          />
        </Menu>
      </Popover>
    )
  }
}

export default Tech;
