import express from 'express';
const router = express.Router();

import { addItemController, deleteItemController } from '../controllers/item.controller.js';

router.route('/add').get(addItemController).post(addItemController);
router.route('/delete').post(deleteItemController);

export { router as itemRoutes }