const lobbyService = require("../services/lobby.service");

const lobbyPing = (req, res, next) => {
  next(lobbyService.lobbyPing());
};

const profile = async (req, res, next) => {
  const { userId } = req.user;
  next(await lobbyService.profile(userId));
};

const othersProfile = async (req, res, next) => {
  const { nickname } = req.query;
  next(await lobbyService.othersProfile(nickname));
};

const profileEdit = async (req, res, next) => {
  const { userId } = req.user;
  const { profileId, backgroundId } = req.body;

  next(await lobbyService.profileEdit(userId, profileId, backgroundId));
};

const search = async (req, res, next) => {
  const { nickname } = req.query;
  next(await lobbyService.search(nickname));
};

const shop = async (req, res, next) => {
  const { userId } = req.user;
  next(await lobbyService.shop(userId));
};

const buy = async (req, res, next) => {
  const { userId } = req.user;
  const { itemId } = req.body;
  next(await lobbyService.buy(userId, itemId));
};

const rank = async (req, res, next) => {
  next(await lobbyService.rank());
};

const problemList = async (req, res, next) => {
  const { userId } = req.user;
  next(await lobbyService.problemList(userId));
};

module.exports = {
  lobbyPing,
  profile,
  othersProfile,
  profileEdit,
  search,
  shop,
  buy,
  rank,
  problemList,
};
