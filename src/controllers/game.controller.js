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

const detail = async (req, res, next) => {
  const { userId } = req.user;
  const { problemId } = req.body;

  next(await gameService.detail(userId, problemId));
};

const tutorial = async (req, res, next) => {
  const { userId } = req.user;

  next(await gameService.tutorial(userId));
}

module.exports = {
  gamePing,
  submit,
  detail,
  tutorial,
};
