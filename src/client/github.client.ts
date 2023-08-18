// Lazy Loading
import dotenv from 'dotenv';

dotenv.config();

import fetch from 'node-fetch';
import { GitHubGetUsersResponse } from '../interfaces/github.response';
import { SearchGitHubUsersRequest } from '../interfaces/github.client';


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
  // console.log(data);
  return await response.json();
}

export const getGitHubUserProfile = async (username: string) => {
  let url = `https://api.github.com/users/${username}`;
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
    }
  })
  return await response.json();
};
 


export type SearchGitHubRepositoriesRequest = {
    owner: string,
    repo: string
}

export type SearchGitHubLanguagesResponse = {
      [key:string]: number,
    
}

export type SearchGitHubUsernameRequest = {
  username: string
}

export type GitHubUsernameResponse = {
key: string
}

export const searchGitHubUsername = async (request: SearchGitHubUsernameRequest): Promise<GitHubUsernameResponse> => {
const {username} = request;

let url = `https://api.github.com/users/${username}`;

const response = await fetch(url, {
headers: {
'Accept': 'application/vnd.github+json',
'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
}

});
return await response.json();
}

export const searchGitHubRepositories = async (request: SearchGitHubRepositoriesRequest): Promise<SearchGitHubLanguagesResponse> => {
const { owner, repo } = request;

let url = `https://api.github.com/repos/${owner}/${repo}/languages`;
const response = await fetch(url, {
  headers: {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
  }

});
return await response.json();
}


// searchGitHubUsers({
//   searchTerm: 'bolu',
// }).then();
