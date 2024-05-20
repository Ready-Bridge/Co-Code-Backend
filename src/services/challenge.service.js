const { HttpResponse } = require("../helpers/response.helper");
const { problemModel } = require("../schemas/problem.schema");

const list = async () => {
  try {
    const temp = await problemModel.find({ isChallenge: true });
    return new HttpResponse(
      200,
      await problemModel.find({ isChallenge: true })
    );
  } catch (err) {
    throw err;
  }
};

const weekly = async () => {
  try {
    const now = new Date();

    const weeklyChallenge = await problemModel
      .findOne()
      .where("isChallenge")
      .equals(true)
      .where("startedAt")
      .lte(now)
      .where("finishedAt")
      .gte(now);

    return new HttpResponse(200, weeklyChallenge);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  list,
  weekly,
};
