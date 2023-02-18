import express from 'express';
const router = express.Router();

import { controller_item_add } from '../controllers/controller_item.js';

router.route('/').get(controller_item_add).post(controller_item_add);

export { router as itemRoutes };