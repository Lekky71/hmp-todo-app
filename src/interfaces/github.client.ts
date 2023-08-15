

export interface SearchGitHubUsersRequest  {
  searchTerm: string;
  sort?: string;
  order?: 'asc' | 'desc';
  perPage?: number;
  page?: number;
}
export interface GetGitHubRepoLanguageRequest  {
  owner: string,
  repo: string,
}