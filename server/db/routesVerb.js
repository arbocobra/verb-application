import express from 'express';
import { getAllVerbs, getVerbsById } from './controllersVerb.js';

const router = express.Router();

router.get('/', getAllVerbs);
router.get('/:id', getVerbsById);
// others?

export default router;