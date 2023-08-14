
export type SearchGitHubUsersRequest = {
  searchTerm: string;
  sort?: string;
  order?: 'asc' | 'desc';
  perPage?: number;
  page?: number;
}
