const { join } = require("../src/services/auth.service.js");

test("join test", () => {
  const User = new userModel({
    userId: "test1",
    password: "1234",
    nickname: "tester1",
    email: "test1@test.com",
  });

  const response = join(User);

  except(response["status"]).toBe(11000);
});
