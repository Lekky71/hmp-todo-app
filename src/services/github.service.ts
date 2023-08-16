import { SearchGitHubUsersRequest } from '../interfaces/github.client';
import { searchGitHubUsers } from '../client/github.client';
import { GitHubUserRecord, SearchGitHubUsersSvcResponse } from '../interfaces/github';
import { GitHubGetUsersResponse } from '../interfaces/github.response';

export const searchUsers = async (request: SearchGitHubUsersRequest): Promise<SearchGitHubUsersSvcResponse> => {
  const result = await searchGitHubUsers(request);
  const refinedItems = getRefinedUserData(result);
  return {
    result: result,
    refinedItems: refinedItems,
  }
}

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
}
