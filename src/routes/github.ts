import express from 'express';
import { getGitHubUserProfile, searchGitHubUsers, searchGitHubRepositories} from '../client/github.client';
import { HandleGetUsers } from '../controllers/github';

const router = express.Router({mergeParams: true});


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

router.get('/repos/:owner/:repo/languages', async (req: express.Request, res: express.Response) => {
    console.log('Got Here');
    const owner = req.params.owner;
    const repo = req.params.repo;
      try {
        const result = await searchGitHubRepositories({
          owner: owner,
          repo: repo
        });
    return res.status(200).send({ 
      languages: Object.keys(result)
    });
  } catch (e: any) {
    console.error(e);
    return res.status(500).send({ message: 'Internal Server Error' });
  }
  });


export default router;