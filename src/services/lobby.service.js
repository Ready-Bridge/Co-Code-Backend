const { HttpResponse } = require("../helpers/response.helper");

const lobbyPing = () => {
  return new HttpResponse(200, "pong");
};

module.exports = {
  lobbyPing,
};
