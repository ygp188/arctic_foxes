import express from 'express';
import { Fox } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const foxes = await Fox.findAll({ order: [['updatedAt', 'DESC']] });
    const initState = { foxes };
    return res.render('Layout', initState);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fox = await Fox.findByPk(id);
    const initState = { fox };
    return res.render('Layout', initState);
  } catch (err) {
    return res.sendStatus(500);
  }
});

export default router;
