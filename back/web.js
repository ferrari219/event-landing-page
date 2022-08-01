const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');

const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize
  .sync({ force: true })
  // .sync()
  .then(() => {
    console.log('DB연결 성공');
  })
  .catch(console.error);
passportConfig();

let port;
if (process.env.NODE_ENV === 'production') {
  port = 80;
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
  app.use(
    cors({
      origin: 'http://land.grah.shop',
      credentials: true,
    })
  );
} else {
  port = 3065;
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: 'http://localhost:3060',
      credentials: true,
    })
  );
}
app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`${port} 서버 실행중`);
});
