import * as express from 'express';
import {SearchForUsers, UserbyLocationn, UserProfileinfo, GetRepoLanguages} from '../controllers/github_controller';



const router = express.Router();

router.get('/users',SearchForUsers);

router.get('/user',UserbyLocationn);

router.get('/username/:username', UserProfileinfo);

router.get('/repo',GetRepoLanguages);


export default router;