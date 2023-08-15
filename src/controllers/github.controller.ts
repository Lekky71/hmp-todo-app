import express from 'express';
import * as githubService from '../services/github.service'

export const searchGitHubUsersHandler = async (req:express.Request, res:express.Response) => {
    const { searchTerm, page, perPage, sort, order } = req.query;
  try {
    const result = await githubService.searchGitHubUsers({
      searchTerm: searchTerm as string,
      page: page as unknown as number,
      perPage: perPage as unknown as number,
      sort: sort as string,
      order: order as ('asc' | 'desc'),
    });
    // only return the items login url and avatar_url
    const refinedItems = result.items.map((item: any) => {
      return {
        login: item.login,
        avatar_url: item.avatar_url,
        url: item.url,
      };
    });
    return res.status(200).send({
      total_count: result.total_count,
      incomplete_results: result.incomplete_results,
      items: refinedItems,
    });
}   catch (e: any) {
    console.log(e.response);
    return res.status(500).send({ message: 'An error occurred' });
  }
};
export const  GetGitHubRepoLanguageHandler = async (req:express.Request, res:express.Response) => {
    const {repo, owner} = req.params;
    try{
      const result = await githubService.getGitHubRepoLanguage({
        repo : repo as string,
        owner: owner as string,
      });
     console.log(result);
     return res.status(200).send(result);
  
    } catch (error: any) {
      console.log(error.response);
      return res.status(500).send({message: 'An error occured'});
  } 
};
export const  GetGitHubUserProfileHandler = async (req:express.Request, res:express.Response) => {
    const username = req.params.username;
    try {
      const result = await githubService.getGitHubUserProfile(username);
      console.log(result);
      return res.status(200).send(result);
    } catch (e: any) {
      console.log(e);
      return res.status(500).send({ message: 'An error occurred' });
    }
}
export const searchGitHubUsersCityHandler = async (req:express.Request, res:express.Response) => {
    const {city} = req.params;
try {
    const result = await githubService.searchGitHubUsers ({
        searchTerm: `Location:${city}`,
        page: 1,
        perPage: 10,
        sort: 'followers',
        order: 'desc'
    });
    const refinedItems = result.items.map((item: any) => {
        return {
            login:item.login,
            avatar_url: item.avatar_url,
            url: item.url,
        };
    });
    return res.status(200).send({
        total_count: result.total_count,
        incomplete_results: result.incomplete_results,
        items: refinedItems,
    });
} catch (error: any) {
    console.log(error.response);
    return res.status(500).send({message: 'An error occured'});
}
}