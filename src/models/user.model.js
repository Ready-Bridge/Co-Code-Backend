module.exports = class User {
  constructor(id, username, password, name, studentId) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.studentId = studentId;
  }
};
