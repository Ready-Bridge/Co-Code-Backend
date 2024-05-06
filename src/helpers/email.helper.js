const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;

// 렌덤 code 생성하는 함수
const generateRandomNumber = (n) => {
  let code = "";
  for (let i = 0; i < n; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
});

const sendEmail = (email, code) => {
  const mailOptions = {
    from: NODEMAILER_USER,
    to: email,
    subject: "Co-Code 회원가입 인증 코드", // 메일제목
    text: `Co-Code 회원가입 인증 코드: ${code}`, // 메일 내용
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });

  return code;
};

module.exports = { generateRandomNumber, sendEmail };
