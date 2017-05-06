import flowerBG from '../../../assets/flower_bg.png';

const PostViewStyles = {
  container: {
    backgroundImage: `url(${ flowerBG })`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "contain",
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10%",
    minHeight: "85vh",
    color: "white"
  },
  page: {
    margin: "10%",
    marginBottom: "0",
    padding: "5%"
  }
}

export default PostViewStyles;
