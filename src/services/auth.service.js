const { HttpResponse } = require("../helpers/response.helper");

const authPing = () => {
  setTimeout(() => {}, 1000);

  return new HttpResponse(200, "pong");
};

module.exports = {
  authPing,
};
