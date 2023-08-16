import express from 'express';
import { getGitHubUserProfile, searchGitHubUsers } from '../client/github.client';
import { HandleGetUsers } from '../controllers/github.controller';

const router = express.Router();


router.get('/users', HandleGetUsers);

router.get('/users/:username', async (req: express.Request, res: express.Response) => {
  const username = req.params.username;
  try {
    const result = await getGitHubUserProfile(username);
    console.log(result);
    return res.status(200).send(result);
  } catch (e: any) {
    console.log(e);
    return res.status(500).send({ message: 'An error occurred' });
  }
});


export default router;
