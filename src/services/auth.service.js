const { HttpResponse } = require("../helpers/response.helper");

const authPing = () => {
  setTimeout(() => {
    return new HttpResponse(200, "pong");
  }, 10000);
};

module.exports = {
  authPing,
};
