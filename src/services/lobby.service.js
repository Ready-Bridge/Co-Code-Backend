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
    throw err;
  }
};

const shop = async ( userId ) => {
  try{
    const user = await userModel.findOne({ userId: userId });
    const { money, item } = user;

    return new HttpResponse(200, {
      money: money,
      item: item,
    })
  } catch (err) {
    throw err;
  }
};

module.exports = {
  lobbyPing,
  profile,
  shop,
};
