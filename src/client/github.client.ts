import {SearchGitHubUsersRequest, GetUsersInSpecificLocationRequest,GitHubUserRepoLanguageRequest } from '../interfaces/github.client';
import {GitHubGetUsersResponse,GetGitHubLanguagesResponse,GetUsersInSpecificLocationsResponse} from '../interfaces/github.response';

// Hashcode's example.
export const searchGitHubUsers = async (request: SearchGitHubUsersRequest): Promise<GitHubGetUsersResponse> => {
    const { searchTerm, sort, order, perPage, page } = request;
    // const url = `https://api.github.com/search/users?q=${searchTerm}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`;
    let url = `https://api.github.com/search/users?q=${searchTerm}`;
    if (sort) {
      url += `&sort=${sort}`;
    }
    if (order) {
      url += `&order=${order}`;
    }
    if (perPage) {
      url += `&per_page=${perPage}`;
    }
    if (page) {
      url += `&page=${page}`;
    }
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
      },
    });
    return await response.json();
  }

  // Question 1 => search for users in a particular location.
  export const getUsersInSpecificLocation = async (request: GetUsersInSpecificLocationRequest):Promise<GetUsersInSpecificLocationsResponse>=>{
    const {searchTerm,/*location,*/order}=request;
    let url=`https://api.github.com/search/user?q=${searchTerm}`;
    if (order) {
      url += `&order=${order}`;
    }
    if (location) {
      url += `&location=${location}`;
    }
    const response = await fetch(url,{
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
      }
    });
    return await response.json();
  }
  
  // question 2 => get user profile info.
export const getGitHubUserProfile = async (username: string) => {
    let url = `https://api.github.com/users/${username}`;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
      }
    });
    return await response.json();
  }

// Question 3 => get languages used in a repo.
export const GetGithubUserRepoLangs = async (request:GitHubUserRepoLanguageRequest):Promise<GetGitHubLanguagesResponse> =>{
    const {owner,repo}=request;
    let url = `https://api.github.com/repos/${owner}/${repo}/languages`;
  
    const response = await fetch(url, {
        headers:{
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
        },
    });
    return await response.json();
  }