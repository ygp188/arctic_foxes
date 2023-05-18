import express from 'express';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';

import indexRouter from './routes/indexRouter';
import foxesRouter from './routes/foxesRouter';
import apiRouter from './routes/apiRouter';
import userRouter from './routes/userRouter';
import authRouter from './routes/authRouter';
import postsRouter from './routes/postsRouter';
import { pathMiddleware, authMiddleware } from './middlewares';
import jsxRender from './utils/jsxRender';

const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.engine('js', jsxRender);
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(session(sessionConfig));
app.use(pathMiddleware);
app.use(authMiddleware);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/foxes', foxesRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Server has started on port 3000');
});
