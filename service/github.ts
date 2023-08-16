import fetch from 'node-fetch';

export async function searchGitHubUsers(params: {
  searchTerm: string;
  page: number;
  perPage: number;
  sort: string;
  order: 'asc' | 'desc';
}) {
  const { searchTerm, page, perPage, sort, order } = params;
  
  const url = `https://api.github.com/search/users?q=${searchTerm}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`;
 

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getGitHubUserProfile(username: string) {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}














