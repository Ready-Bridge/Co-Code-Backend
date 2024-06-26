const { HttpResponse } = require("../helpers/response.helper");
const bcrypt = require("bcrypt");
const authHelper = require("../helpers/auth.helper");
const { generateRandomNumber, sendEmail } = require("../helpers/email.helper");
const { userModel } = require("../schemas/user.schema");

const authPing = () => {
  return new HttpResponse(200, "pong");
};

const login = async (userId, password) => {
  let user = await userModel.findOne({ userId: userId });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new HttpResponse(401, "WRONG_USER_INFO");
  }
  return new HttpResponse(200, {
    token: authHelper.genToken({
      userId: user.userId,
      nickname: user.nickname,
      email: user.email,
    }),
  });
};

const code = async (email) => {
  const code = generateRandomNumber(6);
  try {
    sendEmail(email, code);
    return new HttpResponse(201, code);
  } catch (err) {
    throw err;
  }
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
  code,
  login,
};
