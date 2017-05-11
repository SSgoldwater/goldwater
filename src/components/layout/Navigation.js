import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { Link, NavLink } from 'react-router-dom';
import AuthStore from '../../stores/AuthStore';
import AuthActions from '../../actions/AuthActions';
import AppStore from '../../stores/AppStore';
import gwLogo from '../../assets/gw_glyph.png';
import Tech from './navMenus/Tech';
import TechTutorials from './navMenus/TechTutorials';
import Health from './navMenus/Health';
import HealthBlogs from './navMenus/HealthBlogs';
import About from './navMenus/About';
import UserMenu from './navMenus/UserMenu';
import styles from './styles/NavigationStyles';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      navOpen: false,
      user: AuthStore.getUser(),
      fb: null
    }
  }

  componentWillMount() {
    AuthStore.addChangeListener(this._onChange);
    this._setFB();
  };

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fb != this.state.fb) {
      this._checkUserStatus();
    }
  }

  _onChange = () => {
    this.setState({ user: AuthStore.getUser() });
  }

  _setFB = () => {
    if (AppStore.getFB() == null) {
      setTimeout(() => { this._setFB() }, 50);
    } else {
      this.setState({ fb: AppStore.getFB() });
    }
  }

  _checkUserStatus = () => {
    const _this = this;
    this.state.fb.getLoginStatus((res) => {
      if (res.status == 'connected') {
        const _token = res.authResponse.accessToken;
        const _id = res.authResponse.userID;

        _this.state.fb.api('/me', ['public_profile'], (res) => {
          const _name = res.name;

          _this.state.fb.api('/me?fields=picture', ['public_profile'], (res) => {
            const _picUrl = res.picture.data.url;

            AuthActions.setUser({
              id: _id,
              token: _token,
              name: _name,
              picUrl: _picUrl 
            });
          });
        });
      }
    });
  }

  logout = () => {
    this.setState({ userMenuOpen: false });
    this.state.fb.logout((res) => {
      AuthStore.setUser({
        id: null,
        token: null,
        name: null,
        picUrl: null
      });
    });
  }

  _openUserMenu = (event) => {
    event.preventDefault();

    this.setState({ 
      userMenuOpen: !this.state.userMenuOpen,
      userMenuAnchor: event.currentTarget
    });
  }

  _openNavMenu = (event) => {
    event.preventDefault();

    this.setState({ 
      navMenuOpen: true,
      currentNavMenu: event.currentTarget.id,
      navMenuAnchor: event.currentTarget
    });
  }

  openSubNavMenu = (event) => {
    event.preventDefault();

    this.setState({ 
      subNavMenuOpen: true,
      currentSubNavMenu: event.currentTarget.id,
      subNavMenuAnchor: event.currentTarget
    });
  }

  _setNavMenu = (event) => {
    event.preventDefault();

    if (this.state.navMenuOpen) {
      this.setState({
        currentNavMenu: event.target.innerText,
        currentSubNavMenu: "none",
        navMenuAnchor: event.currentTarget
      });
    }
  }

  setSubNavMenu = (event) => {
    event.preventDefault();

    if (this.state.navMenuOpen) {
      this.setState({
        currentSubNavMenu: event.target.innerText,
        subNavMenuAnchor: event.currentTarget
      });
    }
  }

  _closeUserMenu = () => {
    this.setState({ userMenuOpen: false });
  }

  closeNavMenus = () => {
    this.setState({
      navMenuOpen: false,
      subNavMenuOpen: false
    });
  }

  render() {
    const _loginButton = (
      <FlatButton
        label={ "Login" }
        style={ styles.loginButton }
        labelStyle={ styles.loginButtonLabel }
        containerElement={ <Link to={ "/login" }>Login</Link> }
      />
    )

    const _userPicButton = (
      <Avatar 
        src={ this.state.user.picUrl }
        style={ styles.avatar }
        size={ 50 }
        onTouchTap={ this._openUserMenu }
      />
    )

    return (
      <div>
        <Toolbar
          style={ styles.toolBar }
        >
          <ToolbarGroup
            style={ styles.nav }
            firstChild={ true }
          >
            <NavLink to={ '/welcome' }>
              <img
                src={ gwLogo }
                style={ styles.logo }
              />
            </NavLink>
            <FlatButton
              id={ "Tech" }
              label={ "Tech" }
              style={ styles.navButton }
              labelStyle={ styles.navButtonLabel }
              hoverColor={ "rgba(0,0,0,.2)" }
              onTouchTap={ this._openNavMenu }
              onMouseEnter={ this._setNavMenu }
            />
            <ToolbarSeparator style={ styles.separator } />
            <FlatButton
              id={ "Health" }
              label={ "Health" }
              style={ styles.navButton }
              labelStyle={ styles.navButtonLabel }
              hoverColor={ "rgba(0,0,0,.2)" }
              onTouchTap={ this._openNavMenu }
              onMouseEnter={ this._setNavMenu }
            />
            <ToolbarSeparator style={ styles.separator } />
            <FlatButton
              id={ "About" }
              label={ "About" }
              style={ styles.navButton }
              labelStyle={ styles.navButtonLabel }
              hoverColor={ "rgba(0,0,0,.2)" }
              onTouchTap={ this._openNavMenu }
              onMouseEnter={ this._setNavMenu }
            />
          </ToolbarGroup>
          <ToolbarGroup lastChild={ true }>
            <TextField
              hintText={ "Search" }
              style={ styles.searchBox }
              inputStyle={ styles.searchText }
              hintStyle={ styles.searchHint }
              underlineShow={ false }
            />
            { this.state.user.picUrl ?
            _userPicButton : _loginButton }
          </ToolbarGroup>
        </Toolbar>
        <UserMenu
          style={ styles.menuStyle }
          open={ this.state.userMenuOpen }
          anchorEl={ this.state.userMenuAnchor }
          logout={ this.logout }
          onRequestClose={ this._closeUserMenu }
        />
        <Tech
          open={ this.state.navMenuOpen && this.state.currentNavMenu == "Tech" }
          anchorEl={ this.state.navMenuAnchor }
          onRequestClose={ this.closeNavMenus }
          openSubMenu={ this.openSubNavMenu }
          closeNav={ this.closeNavMenus }
        />
        <TechTutorials
          open={ this.state.subNavMenuOpen && this.state.currentSubNavMenu == "Tutorials" }
          anchorEl={ this.state.subNavMenuAnchor }
          closeNavMenus={ this.closeNavMenus }
          onMouseEnter={ this.setSubNavMenu }
          closeNav={ this.closeNavMenus }
        />
        <Health
          open={ this.state.navMenuOpen && this.state.currentNavMenu == "Health" || this.state.currentNavMenu == "Blogs" }
          anchorEl={ this.state.navMenuAnchor }
          onRequestClose={ this.closeNavMenus }
          openSubMenu={ this.openSubNavMenu }
          closeNav={ this.closeNavMenus }
        />
        <HealthBlogs
          open={ this.state.subNavMenuOpen && this.state.currentSubNavMenu == "Blogs" }
          anchorEl={ this.state.subNavMenuAnchor }
          onMouseEnter={ this.setSubNavMenu }
          closeNav={ this.closeNavMenus }
        />
        <About 
          open={ this.state.navMenuOpen && this.state.currentNavMenu == "About" }
          anchorEl={ this.state.navMenuAnchor }
          onRequestClose={ this.closeNavMenus }
          closeNav={ this.closeNavMenus }
        />
      </div>
    )
  }
}

export default Navigation;
