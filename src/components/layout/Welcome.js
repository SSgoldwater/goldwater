import React from 'react';
import Navigation from './Navigation';
import styles from './styles/WelcomeStyles';

class Welcome extends React.Component {
  
  render() {
    return (
      <div style={ styles.container }>
        <Navigation />
        <h1 style={ styles.welcome }>
          Welcome
        </h1>
        <h2 style={ styles.splashText }>
          This is GoldwaterIO,{ "\n" }
          a digital fountain of modern{ "\n" }
          and ancient knowledge.
        </h2>
      </div>
    );
  }
}

export default Welcome;
