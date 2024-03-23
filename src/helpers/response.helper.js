class HttpResponse {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
}

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof HttpResponse) {
    res.status(err.status);
    if (typeof err.data === "string") {
      return res.send(err.data);
    }
    return res.json(err.data);
  }

  return res.status(500).send("Internal Server Error");
};

module.exports = {
  HttpResponse,
  errorHandler,
};
