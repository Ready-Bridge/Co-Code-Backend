const challengeService = require("../services/challenge.service");

const list = async (req, res, next) => {
  next(await challengeService.list());
};

const weekly = async (req, res, next) => {
  next(await challengeService.weekly());
};

module.exports = {
  list,
  weekly,
};
