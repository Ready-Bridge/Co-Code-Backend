const { HttpResponse } = require("../helpers/response.helper");
const { userModel } = require("../schemas/user.schema");
const { problemRecordModel } = require("../schemas/problemRecord.schema");
const { itemModel } = require("../schemas/item.schema");

const lobbyPing = () => {
  return new HttpResponse(200, "pong");
};

const profile = async (userId) => {
  try {
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

const othersProfile = async (ninckname) => {
  try {
    const user = await userModel.findOne({ nickname: ninckname });

    const { nickname, profile, background } = user;

    return new HttpResponse(200, {
      nickname: nickname,
      profile: profile,
      background: background,
    });
  } catch (error) {
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

    return new HttpResponse(200, "profileEdit Success");
  } catch (err) {
    throw err;
  }
};

const search = async (nickname) => {
  try {
    const users = await userModel.find(
      { nickname: new RegExp(nickname, "i") },
      { nickname: 1, profile: 1, _id: 0 } // 필드 선택
    );

    return new HttpResponse(200, users);
  } catch (err) {
    throw err;
  }
};

const shop = async (userId) => {
  try {
    const user = await userModel.findOne({ userId: userId });
    const { money, item } = user;

    return new HttpResponse(200, {
      money: money,
      item: item,
    });
  } catch (err) {
    throw err;
  }
};

const buy = async (userId, itemId) => {
  try {
    const user = await userModel.findOne({ userId: userId });
    const item = await itemModel.findOne({ itemId: itemId });

    if (!user) {
      return new HttpResponse(404, "User not found");
    }

    if (!item) {
      return new HttpResponse(404, "Item not found");
    }

    if (user.money < item.price) {
      return new HttpResponse(400, "Not enough money");
    }

    user.money -= item.price;
    user.item.push(itemId);

    await user.save();

    return new HttpResponse(200, {
      money: user.money,
    });
  } catch (err) {
    throw err;
  }
};

const rank = async () => {
  try {
    const users = await userModel.find().exec();

    const userSolved = await Promise.all(
      users.map(async (user) => {
        const clearedProblems = await problemRecordModel
          .countDocuments({
            userId: user.userId,
            isCleared: true,
          })
          .exec();
        return {
          nickname: user.nickname,
          profileId: user.profile,
          clearedProblems: clearedProblems,
        };
      })
    );

    userSolved.sort((a, b) => b.clearedProblems - a.clearedProblems);

    const rankedUsers = userSolved.map((user, index) => ({
      rank: index + 1,
      nickname: user.nickname,
      profileId: user.profileId,
      clearedProblems: user.clearedProblems,
    }));

    return new HttpResponse(200, {
      rank: rankedUsers,
    });
  } catch (err) {
    throw err;
  }
};

const problemList = async (userId) => {
  const allProblem = await problemRecordModel.find(
    {
      userId: userId,
      isCleared: true,
    },
    {
      problemId: 1,
      _id: 0,
    }
  );

  // problemId 필드는 포함하고 기본적으로 포함되는 _id 필드는 제외해서 반환

  const problemList = allProblem.map((problem) => problem.problemId);

  return new HttpResponse(200, problemList);
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
