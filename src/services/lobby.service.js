const { HttpResponse } = require("../helpers/response.helper");
const { userModel } = require("../schemas/user.schema");

const lobbyPing = () => {
  return new HttpResponse(200, "pong");
};

const profile =  ( userId ) => {
  try{

    return new HttpResponse(200, "hi");

    // const { nickname, profile, background, item } = user;

    // return new HttpResponse(200, {
    //   nickname: nickname,
    //   profile: profile,
    //   background: background,
    //   item: item,
    // });
  } catch (err) {
    console.log(err);
    throw err;
  }

};

module.exports = {
  lobbyPing,
  profile
};
