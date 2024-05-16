const { HttpResponse } = require("../helpers/response.helper");
const { problemRecordModel } = require("../schemas/problemRecord.schema");

const gamePing = () => {
  return new HttpResponse(200, "pong");
};

const submit = async (userId, problemId, code) => {
    try {

      //문제 정답 확인하는 로직 추가 필요, 우선은 모두 정답처리

      const record = new problemRecordModel({
        userId: userId,
        problemId: problemId,
        code: code,
        isCleared: true,
      });

      await record.save();

      return new HttpResponse(201, "GAME_SUBMIT_SUCCESS");

    } catch (err) {
      throw err;
    }
}

module.exports = {
  gamePing,
  submit,
};
