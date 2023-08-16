import * as express from 'express';
import {HandleSearchForUsers, UserbyLocationn, UserProfileinfo, GetRepoLanguages} from '../controllers/github_controller';



const router = express.Router();

router.get('/users',HandleSearchForUsers);

router.get('/user',UserbyLocationn);

router.get('/username/:username', UserProfileinfo);

router.get('/repo',GetRepoLanguages);


export default router;