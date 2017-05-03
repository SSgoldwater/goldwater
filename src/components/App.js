import React from 'react';
import { Redirect } from 'react-router-dom';
import Navigation from './layout/Navigation';
import AppStore from '../stores/AppStore.js';
import AppActions from '../actions/AppActions';
import config from '../configs/config';
import rawGoldRound from '../assets/raw_gold_round.png';

class App extends React.Component {
  componentWillMount = () => {
    if (window.cordova) {
      if (window.cordova.platformId == "browser") {
        AppActions.setPlatform('browser');
      } else if (window.cordova.platformId =="android") {
        AppActions.setFB(facebookConnectPlugin);
        AppActions.setPlatform('android');
      }
    } else {
      AppActions.setPlatform('system');
      window.fbAsyncInit = function() {
        FB.init({
          appId      : config.fbAppId,
          cookie     : true,
          xfbml      : true,
          version    : 'v2.8'
        });

        FB.AppEvents.logPageView();   
        AppActions.setFB(FB);
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }

  render () {
    return (
      <Redirect to="/welcome" />
    );
  }
};

export default App;
