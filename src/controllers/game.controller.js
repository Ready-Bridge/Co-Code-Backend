const gameService = require("../services/game.service");

const gamePing = (req, res, next) => {
  next(gameService.gamePing());
};

const submit = async (req, res, next) => {
  const { userId } = req.user;
  const { problemId, code } = req.body;

  next(await gameService.submit(userId, problemId, code));
}

module.exports = {
  gamePing,
  submit,
};
