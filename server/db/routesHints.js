import express from 'express';
import { getHintsByTense } from './controllersHints.js';

const router = express.Router();

// router.get('/', getAllVerbs);
router.get('/:tense', getHintsByTense);

export default router;