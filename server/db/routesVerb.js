import express from 'express';
import { getAllVerbs, getFilteredVerbs } from './controllersVerb.js';

const router = express.Router();

router.get('/', getAllVerbs);
router.get('/filter', getFilteredVerbs);

export default router;