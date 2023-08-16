import {SearchGitHubUsersRequest, GetUsersInSpecificLocationRequest,GitHubUserRepoLanguageRequest } from '../interfaces/github.client';
import {SearchGitHubUsersServiceResponse} from '../interfaces/github'
import {GitHubGetUsersResponse,GetGitHubLanguagesResponse,GetUsersInSpecificLocationsResponse,GetUserInfomationResponse} from '../interfaces/github.response';
import {searchGitHubUsers ,getUsersInSpecificLocation, getGitHubUserProfile, GetGithubUserRepoLangs} from '../client/github.client';

// search for users
export const searchUsers= async (request: SearchGitHubUsersRequest) : Promise<SearchGitHubUsersServiceResponse>=>{
  const result = await searchGitHubUsers(request);
  const refinedItems = result.items.map((item: any) => {
    return {
      login: item.login,
      avatar_url: item.avatar_url,
      url: item.url,
    };
  });
    return {
      result: result,
      refinedItems: refinedItems,
    }
}

//search by location
export const searchByLocation =  async (request :GetUsersInSpecificLocationRequest):Promise<GetUsersInSpecificLocationsResponse>=>{
  const result = await getUsersInSpecificLocation(request);
  return result;
}
// get user porfile info
export const getProfileInformation = async (request: string):Promise<GetUserInfomationResponse>=>{
  const result = await getGitHubUserProfile(request)
  return result;
}
// get languages used in a repo
// Question 3.
export const getLanguagesUsedInRepo = async (request: GitHubUserRepoLanguageRequest): Promise<GetGitHubLanguagesResponse>=>{
  const result = await GetGithubUserRepoLangs(request);
  return result;
}