import express from 'express';
import {
    searchGitHubUsersHandler,
    getGitHubRepoLanguageHandler,
    getGitHubUserProfileHandler,
    searchGitHubUsersCityHandler
} from '../controllers/github.controller';
const router = express.Router();




// Get a user's profile information
router.get('/users/:username', getGitHubUserProfileHandler)
// Get a user's repo language
router.get('/repos/:owner/:repo/languages', getGitHubRepoLanguageHandler);
// Search for github user
router.get('/users', searchGitHubUsersHandler);
// Search for github user location
router.get('/users/in/:city', searchGitHubUsersCityHandler)

export default router;