export interface GitHubGetUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
  score: number;
}

enum Type {
  User = "User",
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export type GetGitHubLanguagesResponse = {
  [key: string]: number;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export interface GetUsersInSpecificLocationsResponse{
  total_count: number;
  incomplete_results: boolean;
  items: GithubUsers[];
}
export interface GithubUsers{
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
  score: number;
}

export interface GetUserInfomationResponse{
  login: String;
  id: number;
  nodeid: String
  avatarurl: String
   gravatarid: String
   url: String
   htmlurl: String
   followersurl: String
   followingurl: String
   gistsurl: String
   starredurl: String
   subscriptionsurl: String
   organizationsurl: String
   reposurl: String
   eventsurl: String
   receivedEventsurl: String
   type: String
   siteAdmin: Boolean
   name: String
   company: String
   blog: String
   location: String
   email: String
   hireable: Boolean
   bio: String
   twitterUsername: String
   publicRepos: number
   publicGists: number
   followers: number
   following: number
   createdAt: Date
   updatedAt: Date
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*export interface GitHubUserRepoLang{
  languages:{}
}*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
