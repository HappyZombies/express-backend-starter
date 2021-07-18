const { StatusCodes } = require("http-status-codes");

const Users = require("../models/Users");
const logger = require("./internal/Logger");

const ApiError = require("../errors/ApiError");

class UsersService {
  async getAllUsers() {
    try {
      return await Users.query().select();
    } catch (err) {
      logger.error("An error occured when querying all users.", __filename, { err });
      throw new ApiError("An internal server error occurred");
    }
  }

  async getUser(id) {
    let user;
    try {
      user = await Users.query().findById(id);
    } catch (err) {
      logger.error("An error occured when querying all users.", __filename, { err });
      throw new ApiError("An internal server error occurred");
    }
    if (!user) throw new ApiError("User not found", StatusCodes.NOT_FOUND);
    return user;
  }
}

module.exports = new UsersService();
