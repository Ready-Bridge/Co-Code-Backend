const { HttpResponse } = require("../helpers/response.helper");
const { userModel } = require("../schemas/user.schema");

const lobbyPing = () => {
  return new HttpResponse(200, "pong");
};

const profile = async ( userId ) => {
  try{
    const user = await userModel.findOne({ userId: userId });

    console.log(user);

    if (!user) {
      return new HttpResponse(400, "USER_NOT_EXISTS");
    }

    const { nickname, profile, background, item } = user

    return new HttpResponse(200, {
      nickname: nickname,
      profile: profile,
      background: background,
      item: item,
    })
  } catch (err) {
    throw err;
  }

};

module.exports = {
  lobbyPing,
  profile
};
