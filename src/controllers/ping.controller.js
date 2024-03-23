const pingService = require("../services/ping.service");

const ping = (req, res, next) => {
  next(pingService.ping());
};

module.exports = {
  ping,
};
