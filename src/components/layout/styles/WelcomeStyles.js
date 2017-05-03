import rawGoldRound from '../../../assets/raw_gold_round.png';

const WelcomeStyles = {
  container: {
    backgroundImage: `url(${ rawGoldRound })`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    height: "100vh"
  },
  welcome: {
    fontFamily: "Hind, sans-serif",
    fontWeight: "300",
    fontSize: "5em",
    textAlign: "center",
    color: "white",
    width: "50%",
    position: "fixed",
    bottom: "-20px",
    left: "0px"
  },
  splashText: {
    fontFamily: "Hind, sans-serif",
    fontWeight: "300",
    color: "white",
    fontSize: "26px",
    textAlign: "center",
    whiteSpace: "pre-wrap",
    width: "50%",
    position: "fixed",
    bottom: "30px",
    right: "0px"
  }
};

export default WelcomeStyles;
