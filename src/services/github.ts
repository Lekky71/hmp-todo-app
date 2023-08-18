import { SearchGitHubUsersRequest} from '../interfaces/github.client';
import { searchGitHubUsers, searchGitHubUsername, SearchGitHubUsernameRequest, searchGitHubRepositories, SearchGitHubRepositoriesRequest, GitHubUsernameResponse } from '../client/github.client';
import { GitHubUserRecord, SearchGitHubUsersSvcResponse} from '../interfaces/github';
import { GitHubGetUsersResponse, GetGitHubLanguagesResponse} from '../interfaces/github.response';

export const searchUsers = async (request: SearchGitHubUsersRequest): Promise<SearchGitHubUsersSvcResponse> => {
  const result = await searchGitHubUsers(request);
  const refinedItems = getRefinedUserData(result);
  return {
    result: result,
    refinedItems: refinedItems,
  };
};

export const getRefinedUserData = (result: GitHubGetUsersResponse): GitHubUserRecord[] => {
  const refinedItems = result.items.map((item: any) => {
    return {
      login: item.login,
      avatar_url: item.avatar_url,
      url: item.url,
      followersUrl: item.followers_url,
    };
  });
  console.log(refinedItems);
  return refinedItems;
};

export const getGitHubUsername = async (request: SearchGitHubUsernameRequest): Promise<GitHubUsernameResponse> => {
  const { username } = request;
  const result = await searchGitHubUsername({
    username: username,
  });
  return result;
};

export const getGitHubRepositories = async (request: SearchGitHubRepositoriesRequest): Promise<GetGitHubLanguagesResponse> => {
  const { owner, repo } = request;
  const result = await searchGitHubRepositories({
    owner: owner,
    repo: repo,
  });

  const languages = Object.keys(result);

  return {
    languages: languages,
  };
};


