const { HttpResponse } = require("../helpers/response.helper");

const ping = () => {
  return new HttpResponse(200, "pong");
};

module.exports = {
  ping,
};
