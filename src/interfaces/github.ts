import { GitHubGetUsersResponse, GitHubUser GetGitHubLanguagesResponse } from './github.response';

export type GitHubUserRecord = {
  login: string;
  avatar_url: string;
  url: string;
}

export type SearchGitHubUsersSvcResponse = {
  result: GitHubGetUsersResponse;
  refinedItems: GitHubUserRecord[];
}