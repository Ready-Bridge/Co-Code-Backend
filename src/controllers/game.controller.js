const gameService = require("../services/game.service");

const gamePing = (req, res, next) => {
  next(gameService.gamePing());
};

module.exports = {
  gamePing,
};
