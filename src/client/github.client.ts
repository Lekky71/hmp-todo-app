// Lazy Loading
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { GitHubGetUsersResponse } from '../interfaces/github.response';

dotenv.config();

export type SearchGitHubUsersRequest = {
  searchTerm: string;
  sort?: string;
  order?: 'asc' | 'desc';
  perPage?: number;
  page?: number;
}

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

// searchGitHubUsers({
//   searchTerm: 'bolu',
// }).then();
