const gameService = require("../services/game.service");

const gamePing = (req, res, next) => {
  next(gameService.gamePing());
};

const submit = async (req, res, next) => {
  const { userId } = req.user;
  const { problemId, code, isChallenged, isCleared } = req.body;

  next(
    await gameService.submit(userId, problemId, code, isChallenged, isCleared)
  );
};

module.exports = {
  gamePing,
  submit,
};
