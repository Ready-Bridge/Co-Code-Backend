const { HttpResponse } = require("../helpers/response.helper");

const gamePing = () => {
  return new HttpResponse(200, "pong");
};

module.exports = {
  gamePing,
};
