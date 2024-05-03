const challengeService = require("../services/challenge.service");

const challengePing = (req, res, next) => {
  next(challengeService.challengePing());
};

module.exports = {
  challengePing,
};
