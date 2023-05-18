import express from 'express';
import { Post, User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: User,
      order: [['createdAt', 'DESC']],
    });
    const initState = { posts };
    return res.render('Layout', initState);
  } catch (err) {
    return res.sendStatus(500);
  }
});

export default router;
