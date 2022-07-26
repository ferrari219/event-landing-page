const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const nodemailer = require('nodemailer');
const { User } = require('../models');

const dotenv = require('dotenv');
const { isNotLoggedIn, isLoggedIn } = require('./middleware');
dotenv.config();

const router = express.Router();

//로그인정보 확인 LOAD_MY_INFO
router.get('/', async (req, res, next) => {
  console.log(req.user);
  try {
    //로그인 정보가 있다면
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
        // include: [
        //   {

        //   }
        // ]
      });
      res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//메일발송
const generateRandomPassword = () => {
  //비밀번호 초기화
  return Math.floor(Math.random() * 10 ** 8)
    .toString()
    .padStart('0', 8);
};
router.patch('/mail', isNotLoggedIn, async (req, res, next) => {
  //사용자가 이메일을 입력해야 입력한 메일로 메일을 보낼 수 있음
  const { email } = await req.body;
  try {
    //비밀번호 초기화
    const randomPassword = generateRandomPassword();
    //이메일 있는지 찾고 업데이트
    const findEmail = await User.findOne({
      where: { email },
    });
    if (!findEmail) {
      return res.status(400).send('가입하신 이메일과 일치하지 않습니다.');
    }
    const hashedPassword = await bcrypt.hash(randomPassword, 10);
    const user = await User.update(
      {
        password: hashedPassword,
      },
      {
        where: {
          email: email,
        },
      }
    );

    //메일발송 객체
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      //해당 포트번호는 gmail의 SMPT 메일 설정하는 부분에 나와있음
      port: 587,
      host: 'smtp.gmail.com',
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.GOOGLE_MAIL, //보내는 메일 이메일 주소
        pass: process.env.GOOGLE_PASSWORD, //보내는 메일의 비밀번호
      },
    });
    //메일 옵션
    const mailOptions = {
      from: process.env.GOOGLE_MAIL, //보내고자하는 상대방의 메일주소
      to: email, //수신하고자하는 이메일
      subject: '요청하신 관리자 임시 비밀번호입니다.', //보내는 메일의 제목
      text: `임시비밀번호는 ${randomPassword} 입니다. 비밀번호 초기화 페이지에서 새 비밀번호로 변경해주세요.`, //보내고자 하는 메일의 내용
    };
    //메일 발송
    transporter.sendMail(mailOptions, (error, info) => {
      //메일 보내다가 오류 발생하면 어떤 오류인지 콘솔창에 보여줌
      if (error) {
        console.error(error);
        next(error);
      } else {
        return res.status(200).json({ isMailSuccessed: true });
      }
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/reset-password', isNotLoggedIn, async (req, res, next) => {
  const { email, tempPassword, newPassword } = req.body;
  try {
    //이메일 한번 더 체크
    const user = await User.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(400).json('이메일이 일치하지 않습니다.');
    }
    //임시 비밀번호 체크
    const result = await bcrypt.compare(tempPassword, user.password);
    if (!result) {
      return res.status(400).json('임시비밀번호가 일치하지 않습니다.');
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await User.update(
      {
        password: hashedNewPassword,
      },
      {
        where: {
          email: email,
        },
      }
    );
    res.status(200).send('Change Password');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//SignUp
router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        userid: 'admin',
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      userid: req.body.userid,
      password: hashedPassword,
      email: req.body.email,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//LogIn
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      //passport 에러날 경우
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password'],
        },
      });
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

//LogOut
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout(() => {});
  req.session.destroy();
  res.send('ok');
});

//NewPassword
router.patch('/reset', isNotLoggedIn, async (req, res, next) => {
  try {
    const findEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!findEmail) {
      return res.status(403).send('이메일이 일치하지 않습니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.update(
      {
        password: hashedPassword,
      },
      {
        where: { email: req.body.email },
      }
    );
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
