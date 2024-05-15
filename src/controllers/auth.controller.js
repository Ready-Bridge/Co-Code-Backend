const authService = require("../services/auth.service");
const { makeValidator } = require("../helpers/request.helper");

const authPing = (req, res, next) => {
  next(authService.authPing());
};

const loginValidator = makeValidator({
  userId: ["string"],
  password: ["string"],
});

const login = async (req, res, next) => {
  try {
    let { userId, password } = loginValidator(req.body);
    next(await authService.login(userId, password));
  } catch (err) {
    next(err);
  }
};

const joinValidator = makeValidator({
  userId: ["string"],
  password: ["string"],
  nickname: ["string"],
  email: ["string"],
});

const checkJoin = async (req, res, next) => {
  try {
    let { userId, nickname, password, email } = joinValidator(req.body);
    next(await authService.checkJoin(userId, nickname, password, email));
  } catch (err) {
    next(err);
  }
};

const join = async (req, res, next) => {
  try {
    let { userId, password, nickname, email } = joinValidator(req.body);
    next(await authService.join(userId, password, nickname, email));
  } catch (err) {
    next(err);
  }
};

const codeValidator = makeValidator({
  email: ["string"],
});

const code = (req, res, next) => {
  try {
    let { email } = codeValidator(req.body);
    next(authService.code(email));
  } catch (err) {
    next(err);
  }
};

const findIdValidator = makeValidator({
  email: ["string"],
});

const findId = async (req, res, next) => {
  try {
    let { email } = findIdValidator(req.body);
    next(await authService.findId(email));
  } catch (err) {
    next(err);
  }
};

const changePwValidator = makeValidator({
  email: ["string"],
  password: ["string"],
});

const changePw = async (req, res, next) => {
  try {
    let { email, password } = changePwValidator(req.body);
    next(await authService.changePw(email, password));
  } catch (err) {
    next(err);
  }
};

const deleteId = async (req, res, next) => {
  try {
    next(await authService.deleteId(req.user.email));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authPing,
  join,
  code,
  login,
  findId,
  changePw,
  deleteId,
  checkJoin,
};
