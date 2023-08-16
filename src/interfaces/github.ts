import {GitHubGetUsersResponse} from './github.response';

export type GitHubUserRecord = {
    login: string;
    avatar_url: string;
    url: string;
  }
  
  export type SearchGitHubUsersServiceResponse = {
    result: GitHubGetUsersResponse;
    refinedItems: GitHubUserRecord[];
  }