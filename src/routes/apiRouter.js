import express from 'express';
import { Fox, Post, User } from '../../db/models';
import { checkUser } from '../middlewares';

const router = express.Router();

// Foxes
router.delete('/foxes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Fox.destroy({ where: { id } });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.post('/foxes', async (req, res) => {
  try {
    const newFox = await Fox.create(req.body);
    return res.json(newFox);
  } catch (err) {
    return res.sendStatus(500);
  }
});

// Posts
router.post('/posts', async (req, res) => {
  try {
    const newPost = await Post.create({
      body: req.body.input,
      user_id: req.session?.user?.id,
    });

    const post = await Post.findByPk(newPost.id, { include: User });

    return res.json(post);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.delete('/posts/:id', checkUser, async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.patch('/posts/:id', async (req, res) => {
  try {
    await Post.update(
      { body: req.body.input },
      { where: { id: req.params.id } },
    );
    const post = await Post.findByPk(req.params.id);
    return res.json(post);
  } catch (err) {
    return res.sendStatus(500);
  }
});

export default router;
