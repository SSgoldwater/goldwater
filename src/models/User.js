export default class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }
}
