const { Model } = require("objection");

class Users extends Model {
  static get tableName() {
    return "users";
  }
}

module.exports = Users;
