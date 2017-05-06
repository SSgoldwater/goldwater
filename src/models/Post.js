export default class Post {
  constructor(id, uuid, user_id, title, subtitle, body, created_at, updated_at) {
    this.id = id;
    this.uuid = uuid;
    this.user_id = user_id;
    this.title = title;
    this.subtitle = subtitle;
    this.body = body;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
};
