const { HttpResponse } = require("../helpers/response.helper");
const bcrypt = require("bcrypt");
const { userModel } = require("../schemas/user.schema");

const authPing = () => {
  return new HttpResponse(200, "pong");
};

const join = async (userId, password, nickname, email) => {
  try {
    const User = new userModel({
      userId: userId,
      password: await bcrypt.hash(password, 10),
      nickname: nickname,
      email: email,
    }); // User 스키마의 인스턴스 생성

    await User.save(); // 데이터베이스에 저장

    return new HttpResponse(201, "REGISTER_SUCCESS");
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      // 중복 키 에러 확인
      return new HttpResponse(400, "USER_ALREADY_EXISTS");
    }
    throw err;
  }
};

module.exports = {
  authPing,
  join,
};
