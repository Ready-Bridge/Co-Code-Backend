const challengeService = require("../services/challenge.service");
const { makeValidator } = require("../helpers/request.helper");

const list = async (req, res, next) => {
  next(await challengeService.list());
};

const weekly = async (req, res, next) => {
  next(await challengeService.weekly());
};

const solve = async (req, res, next) => {
  next(await challengeService.solve());
};

const detail = async (req, res, next) => {
  next(await challengeService.detail());
};

module.exports = {
  list,
  detail,
  weekly,
  solve,
};
