
export type SearchGitHubUsersRequest = {
  searchTerm: string;
  sort?: string;
  order?: 'asc' | 'desc';
  perPage?: number;
  page?: number;
}
export type GetUsersInSpecificLocationRequest={
  //location:string;
  order?:'asc'|'desc';
  searchTerm:string;
}

export type GitHubUserRepoLanguageRequest = {
  owner : string;
  repo : string;
}
