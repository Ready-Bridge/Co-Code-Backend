const { HttpResponse } = require("../helpers/response.helper");

const authPing = () => {
  return new HttpResponse(200, "pong");
};

module.exports = {
  authPing,
};
