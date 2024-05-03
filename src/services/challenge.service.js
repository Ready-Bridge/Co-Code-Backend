const { HttpResponse } = require("../helpers/response.helper");

const challengePing = () => {
  return new HttpResponse(200, "pong");
};

module.exports = {
  challengePing,
};
