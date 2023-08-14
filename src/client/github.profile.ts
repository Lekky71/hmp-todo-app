// Lazy Loading
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { GitHubGetUsersResponse } from '../interfaces/github.response';

dotenv.config();

export type GitHubGetProfile = {
  name: string;
  bio: string;
  location: string;
  followers: string;
  
}

export const getGitHubUsername = async (request: GitHubGetProfile): Promise<GitHubGetUsersResponse> => {
  const { name, bio, location, followers } = request;
  // const url = `https://api.github.com/search/users?q=${searchTerm}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`;
  let url = `https://api.github.com/search/users?q=${name}`;
  if (name) {
    url += `&name=${name}`;
  }
  if (bio) {
    url += `&bio=${bio}`;
  }
  if (location) {
    url += `&location=${location}`;
  }
  if (followers) {
    url += `&followers=${followers}`;
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
