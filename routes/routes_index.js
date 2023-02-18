import express from 'express';
const router = express.Router();

import { controller_index_show } from '../controllers/controller_index.js';

router.route('/').get(controller_index_show);

export { router as indexRoutes };