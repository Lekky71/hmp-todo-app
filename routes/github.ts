import express from 'express';
import { searchUsers, getUserProfile } from "../controller/github";

const router = express.Router();

router.get('/users', searchUsers);
router.get('/users/:username', getUserProfile);

export default router;
