import express from 'express';
import {  getGitHubUserProfileHandler, handleGetUserCity,getGitHubRepoLanguageHandler, HandleGetUsers  } from '../controllers/github.controller';
const router = express.Router();




// Get a user's profile information
router.get('/users/:username', getGitHubUserProfileHandler)
// Get a user's repo language
router.get('/repos/:owner/:repo/languages', getGitHubRepoLanguageHandler);
// Search for github user
router.get('/users', HandleGetUsers);
// Search for github user location
router.get('/users/in/:city', handleGetUserCity)

export default router;

// import { getGitHubUserProfile, searchGitHubUsers } from '../client/github.client';
// import { HandleGetUsers } from '../controllers/github.controller';









