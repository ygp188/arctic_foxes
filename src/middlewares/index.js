import { Post } from '../../db/models';

export const pathMiddleware = (req, res, next) => {
  res.locals.url = req.url;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session?.user;
  next();
};

export const checkAuth = (req, res, next) => {
  if (!req.session?.user) return res.sendStatus(500);
  return next();
};

export const checkUser = async (req, res, next) => {
  const post = await Post.findByPk(req.params.id);

  if (!(post.user_id === req.session?.user?.id)) return res.sendStatus(400);

  return next();
};
