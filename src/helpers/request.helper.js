const { HttpResponse } = require("./response.helper");

const makeValidator = (fields) => {
  return (body) => {
    for (let key in fields) {
      if (
        Array.isArray(fields[key]) &&
        fields[key].indexOf(typeof body[key]) === -1
      ) {
        throw new HttpResponse(400, `Invalid field type: ${key}`);
      } else if (
        typeof fields[key] === "string" &&
        fields[key].split("|").indexOf(typeof body[key]) === -1
      ) {
        throw new HttpResponse(400, `Invalid field type: ${key}`);
      }
    }
    return body;
  };
};

module.exports = {
  makeValidator,
};
