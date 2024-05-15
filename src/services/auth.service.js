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

const code = (email) => {
  const code = generateRandomNumber(6);
  try {
    sendEmail(email, code);
    return new HttpResponse(201, code);
  } catch (err) {
    throw err;
  }
};

const checkJoin = async (userId, nickname, password, email) => {
  if (
    (await userModel.findOne({ userId: userId })) ||
    (await userModel.findOne({ nickname: nickname })) ||
    (await userModel.findOne({ email: email }))
  ) {
    return new HttpResponse(400, "USER_ALREADY_EXISTS");
  }

  return new HttpResponse(200, "AVAILABLE_USER_INFO");
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
    throw err;
  }
};

const findId = async (email) => {
  try {
    const User = await userModel.findOne({ email });
    if (!User) {
      return new HttpResponse(400, "USER_NOT_FOUND");
    }
    return new HttpResponse(200, User["userId"]);
  } catch (err) {
    throw err;
  }
};

const changePw = async (email, password) => {
  try {
    let user = await userModel.findOne({ email: email });
    oldPassword = user.password;
    if (await bcrypt.compare(password, oldPassword)) {
      return new HttpResponse(400, "SAME_PASSWORD");
    }
    await userModel.updateOne(
      { email: email },
      { password: await bcrypt.hash(password, 10) }
    );
    return new HttpResponse(200, "CHANGE_PW_SUCCESS");
  } catch (err) {
    throw err;
  }
};

const deleteId = async (email) => {
  try {
    const result = await userModel.deleteOne({ email: email });
    if (result.deletedCount === 0) {
      return new HttpResponse(400, "USER_NOT_EXISTS");
    }
    return new HttpResponse(200, "DELETE_ID_SUCCESS");
  } catch (err) {
    throw err;
  }
};

module.exports = {
  authPing,
  join,
  checkJoin,
  code,
  login,
  findId,
  changePw,
  deleteId,
};
