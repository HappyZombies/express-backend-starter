const databaseLoader = require("./databaseLoader");
const expressLoader = require("./expressLoader");

module.exports = async app => {
  await databaseLoader();
  expressLoader(app);
};
