// // Lazy Loading
// import dotenv from 'dotenv';

import fetch from 'node-fetch';
import {request} from 'http';
import { GetGitHubRepoLanguageResponse, GitHubGetUsersResponse } from 'src/interfaces/github.response';
import { SearchGitHubUsersRequest } from 'src/interfaces/github.client';

// import { GetGitHubRepoLanguageResponse, GitHubGetUsersResponse } from '../interfaces/github.response';
// import { SearchGitHubUsersRequest } from '../interfaces/github.client';


// export const searchGitHubUsers = async (request: SearchGitHubUsersRequest): Promise<GitHubGetUsersResponse> => {
//   const { searchTerm, sort, order, perPage, page } = request;
//   // const url = `https://api.github.com/search/users?q=${searchTerm}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`;
//   let url = `https://api.github.com/search/users?q=${searchTerm}`;
//   if (sort) {
//     url += `&sort=${sort}`;
//   }
//   if (order) {
//     url += `&order=${order}`;
//   }
//   if (perPage) {
//     url += `&per_page=${perPage}`;
//   }
//   if (page) {
//     url += `&page=${page}`;
//   }
//   const response = await fetch(url, {
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//       'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
//     },
//   });
//   // console.log(data);
//   return await response.json();
// }
// export interface GetGitHubRepoLanguageRequest {
//   owner: string,
//   repo: string,
// }
// export const getGitHubRepoLanguage = async (request: GetGitHubRepoLanguageRequest): Promise <GetGitHubRepoLanguageResponse> => {
//   const {owner, repo} = request;
//   let url = `https://api.github.com/repos/${owner}/${repo}/languages`;
//   const response = await fetch(url, {
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//       'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
//     },
//   });
//   // console.log(data);
//   return await response.json();
// }
// /*
// export const GetGitHubUserProfile = async (username: string) => {
//   let url =  `https://api.github.com/search/users?q=${username}`;
//   const response = await fetch[url, init: {
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//       'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
//     }
//   }]
//   return await response.json();
// }
// */

// export const getGitHubUserProfile = async (username: string) => {
//   let url = `https://api.github.com/users/${username}`;
//   const response = await fetch(url, {
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//       'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`
//     }
//   });
//   return await response.json();
// }

// // searchGitHubUsers({
// //   searchTerm: 'bolu',
// // }).then();
