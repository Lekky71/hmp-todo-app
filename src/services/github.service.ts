// import {SearchGitHubUsersRequest,GetGitHubRepoLanguageRequest} from '../interfaces/github.client';

import { searchGitHubUsers, getGitHubRepoLanguage, getGitHubUserProfile } from "../client/github.client";
import { GitHubUserRecord, SearchGitHubUsersSvcResponse } from '../interfaces/github';
import { GetGitHubRepoLanguageRequest, SearchGitHubUsersRequest } from "../interfaces/github.client";
import {  GetGitHubRepoLanguageResponse, GitHubGetUsersResponse } from "../interfaces/github.response";

export const searchUsersGitHub = async (request: SearchGitHubUsersRequest): Promise<SearchGitHubUsersSvcResponse> => {
  const result = await searchGitHubUsers(request);
  const refinedItems = getRefinedUserData(result);
  return {
    result: result,
    refinedItems: refinedItems
  }
}
export const getRefinedUserData = (result: GitHubGetUsersResponse): GitHubUserRecord[] => {
  const refinedItems = result.items.map((item: any) => {
    return {
        login:item.login,
        avatar_url: item.avatar_url,
        url: item.url,
    };
});
console.log(refinedItems);
return refinedItems;
}
export const searchGitHubUserCity = async (request: SearchGitHubUsersRequest): Promise<SearchGitHubUsersSvcResponse> => {
    const result = await searchGitHubUsers(request);
    const refinedItems = getRefinedUserDataCity(result);
    return {
      result: result,
      refinedItems: refinedItems
    }
  }
  export const getRefinedUserDataCity = (result: GitHubGetUsersResponse): GitHubUserRecord[] => {
    const refinedItems = result.items.map((item: any) => {
      return {
          login:item.login,
          avatar_url: item.avatar_url,
          url: item.url,
      };
  });
  console.log(refinedItems);
  return refinedItems;
}
export const getRepoLanguage = async (request:GetGitHubRepoLanguageRequest): Promise<GetGitHubRepoLanguageResponse> => {
  const result1 = await getGitHubRepoLanguage(request); 
  return(result1);
}
export const getUserProfile = async (request: string): Promise<GitHubGetUsersResponse> => {
  const result2 = await getGitHubUserProfile(request); 
  return (result2);
}





// export const searchGitHubUsers = async (request: SearchGitHubUsersRequest): Promise<GitHubGetUsersResponse> => {
//     const { searchTerm, sort, order, perPage, page } = request;
//     // const url = `https://api.github.com/search/users?q=${searchTerm}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`;
//     let url = `https://api.github.com/search/users?q=${searchTerm}`;
//     if (sort) {
//       url += `&sort=${sort}`;
//     }
//     if (order) {
//       url += `&order=${order}`;
//     }
//     if (perPage) {
//       url += `&per_page=${perPage}`;
//     }
//     if (page) {
//       url += `&page=${page}`;
//     }
//     const response = await fetch(url, {
//       headers: {
//         'Accept': 'application/vnd.github.v3+json',
//         'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
//       },
//     });
//     return await response.json();
// };
// export const getGitHubRepoLanguage = async (request: GetGitHubRepoLanguageRequest): Promise <GetGitHubRepoLanguageResponse> => {
//     const {owner, repo} = request;
//     let url = `https://api.github/repos/${owner}/${repo}/languages`;
//     const response = await fetch(url, {
//       headers: {
//         'Accept': 'application/vnd.github.v3+json',
//         'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
//       },
//     });
//     // console.log(data);
//     return await response.json();
//   };
//   export const getGitHubUserProfile = async (username: string) => {
//     let url = `https://api.github.com/users/${username}`;
//     const response = await fetch(url, {
//       headers: {
//         'Accept': 'application/vnd.github.v3+json',
//         'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
//       }
//     });
//     return await response.json();
//   }


