const HttpStatus = require("http-status-codes");

const Users = require("../models/Users");
const ApiError = require("./ApiError");
const logger = require("./Logger");

class UsersService {
  async getAllUsers() {
    try {
      return await Users.query().select();
    } catch (e) {
      logger.error("An error occured when querying all users => " + e);
      throw new ApiError("An internal server error occurred");
    }
  }
  async getUser(id) {
    let user;
    try {
      user = await Users.query().findById(id);
    } catch (e) {
      logger.error("An error occured when querying all users => " + e);
      throw new ApiError("An internal server error occurred");
    }
    if (!user) throw new ApiError("Entity not found", HttpStatus.NOT_FOUND);
    return user;
  }
}

module.exports = UsersService;
