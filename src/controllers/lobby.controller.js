const lobbyService = require("../services/lobby.service");

const lobbyPing = (req, res, next) => {
  next(lobbyService.lobbyPing());
};

const profile = (req, res, next) => {
  next(lobbyService.profile());
};

module.exports = {
  lobbyPing,
  profile
};
