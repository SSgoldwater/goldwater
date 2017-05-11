import React from 'react';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import { NavLink } from 'react-router-dom';
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
            containerElement={ <NavLink to={ "/posts/health_blogs" }/> }
            onMouseEnter={ this.props.openSubMenu }
            onTouchTap={ this.props.closeNav }
          />
          <MenuItem
            primaryText="News/Studies"
            containerElement={ <NavLink to={ "/posts/health_news" }/> }
            onMouseEnter={ this.props.openSubMenu }
            onTouchTap={ this.props.closeNav }
          />
          <MenuItem
            primaryText="Product Reviews"
            containerElement={ <NavLink to={ "/posts/health_reviews" }/> }
            onMouseEnter={ this.props.openSubMenu }
            onTouchTap={ this.props.closeNav }
          />
        </Menu>
      </Popover>
    )
  }
}

export default Health;
