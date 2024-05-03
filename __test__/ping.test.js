const { ping } = require("../src/services/ping.service.js");

test("ping test", () => {
  const response = ping();

  // 반환된 응답이 "pong"인지 확인
  expect(response["status"]).toBe(200);
});
