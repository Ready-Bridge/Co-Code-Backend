const lobbyService = require("../services/lobby.service");

const lobbyPing = (req, res, next) => {
  next(lobbyService.lobbyPing());
};

const profile = (req, res, next) => {
  const { userId } = req.user;
  next(lobbyService.profile(userId));
};



module.exports = {
  lobbyPing,
  profile,
};
