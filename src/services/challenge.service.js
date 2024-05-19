const { HttpResponse } = require("../helpers/response.helper");
const { problemModel } = require("../schemas/problem.schema");

const list = () => {
  return new HttpResponse(200, "pong");
};

const weekly = async () => {};

const solve = async () => {};

const detail = async () => {};

module.exports = {
  list,
  detail,
  weekly,
  solve,
};
