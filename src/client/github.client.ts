/*/ Lazy Loading
import dotenv from 'dotenv';

dotenv.config();

import fetch from "node-fetch";
import { GetUsersInSpecificLocationsResponse, GitHubGetUsersResponse,GitHubUserRepoLang } from '../interfaces/github.response';
import { SearchGitHubUsersRequest } from '../interfaces/github.client';
import { GetUsersInSpecificLocationRequest } from '../interfaces/github.client';
import { GitHubUserRepoLanguageRequest } from '../interfaces/github.client';
import { request } from 'http';


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// searchGitHubUsers({
//   searchTerm: 'bolu',
// }).then();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/