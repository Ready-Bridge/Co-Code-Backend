const lobbyService = require("../services/lobby.service");

const lobbyPing = (req, res, next) => {
  next(lobbyService.lobbyPing());
};

const profile = async (req, res, next) => {
  const { userId } = req.user;
  next(await lobbyService.profile(userId));
};

const shop = async (req, res, next) => {
  const { userId } = req.user;
  next(await lobbyService.shop(userId));
};



module.exports = {
  lobbyPing,
  profile,
  shop,
};
