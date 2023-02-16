import express from 'express';
const router = express.Router();

import  item_add  from '../controllers/controller_item.js';

router.route('/').get(item_add).post(item_add);

export {router as itemRoute};