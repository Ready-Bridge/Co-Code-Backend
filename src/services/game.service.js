const { HttpResponse } = require("../helpers/response.helper");
const { problemRecordModel } = require("../schemas/problemRecord.schema");

const gamePing = () => {
  return new HttpResponse(200, "pong");
};

const submit = async (userId, problemId, code, isChallenged, isCleared) => {
  try {
    const record = new problemRecordModel({
      userId: userId,
      problemId: problemId,
      code: code,
      isChallenged: isChallenged,
      isCleared: isCleared,
      clearedAt: null,
    });

    const updateDate = {
      code: code,
      isCleared: isCleared,
    };

    //upsert : 일치하는거 없으면 새로 삽입
    //setDefaultsONInsert : 새로 삽입할때 기본값 설정
    const options = { upsert: true, setDefaultsONInsert: true };

    if (isCleared) {
      record.clearedAt = Date.now();
    }

    await problemRecordModel.findOneAndUpdate(
      { userId: userId, problemId: problemId },
      updateDate,
      options
    );

    return new HttpResponse(201, "GAME_SUBMIT_SUCCESS");
  } catch (err) {
    throw err;
  }
};

const detail = async (userId, problemId) => {
  try {
    const record = await problemRecordModel.findOne({
      userId: userId,
      problemId: problemId,
    });

    if (!record) {
      return new HttpResponse(404, "GAME_DETAIL_NOT_FOUND");
    }

    return new HttpResponse(200, record);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  gamePing,
  submit,
  detail,
};
