const { HttpResponse } = require("../helpers/response.helper");
const { userModel } = require("../schemas/user.schema");
const { problemRecordModel } = require("../schemas/problemRecord.schema");

const lobbyPing = () => {
  return new HttpResponse(200, "pong");
};

const profile = async ( userId ) => {
  try{
    const user = await userModel.findOne({ userId: userId });

    const { nickname, profile, background, item } = user;

    return new HttpResponse(200, {
      nickname: nickname,
      profile: profile,
      background: background,
      item: item,
    });
  } catch (err) {
    throw err;
  }
};

const profileEdit = async (userId, profileId, backgroundId) => {
  try {
    await userModel.updateOne(
        { userId: userId },
        {
          profile: profileId,
          background: backgroundId,
        }
    );

    return new HttpResponse(200, 'profileEdit Success');
  } catch (err) {
    throw err;
  }
}

const shop = async ( userId ) => {
  try{
    const user = await userModel.findOne({ userId: userId });
    const { money, item } = user;

    return new HttpResponse(200, {
      money: money,
      item: item,
    })
  } catch (err) {
    throw err;
  }
};

const rank = async () => {
  try {
    const users = await userModel.find().exec();

    const userSolved = await Promise.all(users.map(async (user) => {
      const clearedProblems = await problemRecordModel.countDocuments({
        userId: user.userId,
        isCleared: true
      }).exec();
      return {
        nickname: user.nickname,
        profileId: user.profile,
        clearedProblems: clearedProblems
      };
    }));

    userSolved.sort((a, b) => b.clearedProblems - a.clearedProblems);

    const rankedUsers = userSolved.map((user, index) => ({
      rank: index + 1,
      nickname: user.nickname,
      profileId: user.profileId,
      clearedProblems: user.clearedProblems
    }));

    return new HttpResponse(200, {
      rank: rankedUsers,
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  lobbyPing,
  profile,
  profileEdit,
  shop,
  rank,
};
