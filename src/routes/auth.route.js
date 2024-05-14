const express = require("express");
const router = express.Router();
const authController = require(`../controllers/auth.controller`);
const { middleware } = require("../helpers/auth.helper");

router.post("/login", authController.login); // 로그인
router.post("/checkJoin", authController.checkJoin); // 회원가입 정보 중복 확인
router.post("/join", authController.join); // 회원가입
router.post("/code", authController.code); // 이메일 인증 코드 전송
router.post("/findId", authController.findId); // 아이디 찾기
router.post("/changePw", authController.changePw); // 비밀번호 변경
router.delete("/deleteId", middleware, authController.deleteId); // 회원탈퇴

module.exports = router;
