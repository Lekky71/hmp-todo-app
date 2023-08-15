import express from 'express';
import {
    searchGitHubUsersHandler,
    GetGitHubRepoLanguageHandler,
    GetGitHubUserProfileHandler,
    searchGitHubUsersCityHandler
} from '../controllers/github.controller';
const router = express.Router();




// Get a user's profile information
router.get('/users/:username', GetGitHubUserProfileHandler)
// Get a user's repo language
router.get('/repos/:owner/:repo/languages', GetGitHubRepoLanguageHandler);
// Search for github user
router.get('/users', searchGitHubUsersHandler);
// Search for github user location
router.get('/users/in/:city', searchGitHubUsersCityHandler)

export default router;