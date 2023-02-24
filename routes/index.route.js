import express from 'express';
const router = express.Router();

import { showIndexController } from '../controllers/index.controller.js';

router.route('/').get(showIndexController);

export { router as indexRoutes }