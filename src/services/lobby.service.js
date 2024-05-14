const { HttpResponse } = require("../helpers/response.helper");
const { userModel } = require("../schemas/user.schema");

const lobbyPing = () => {
  return new HttpResponse(200, "pong");
};

const profile = async ( userId ) => {
  try{
    const user = await userModel.findOne({ userId: userId });

    const { nickname, profile, background, item } = user;

    return new HttpResponse(200, {
      nickname: nickname,
      profile: profile,
      background: background,
      item: item,
    });

  } catch (err) {
    console.log(err);
    throw err;
  }

};

module.exports = {
  lobbyPing,
  profile
};
