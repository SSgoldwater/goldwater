export default class Post {
  constructor(props) {
    this.id = props.id;
    this.uuid = props.uuid;
    this.user_id = props.user_id;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.body = props.body;
    this.created_at = props.created_at;
    this.updated_at = props.updated_at;
  }
};
