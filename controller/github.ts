import { Request, Response } from "express";
import { searchGitHubUsers, getGitHubUserProfile } from "../service/github";

export async function searchUsers(req: Request, res: Response) {
  const { searchTerm, page, perPage, sort, order } = req.query;
  try {
    const result: any = await searchGitHubUsers({
      searchTerm: searchTerm as string,
      page: parseInt(page as string),
      perPage: parseInt(perPage as string),
      sort: sort as string,
      order: order as 'asc' | 'desc',
    });
    const refinedItems = result.items.map((item: any) => ({
      login: item.login,
      avatar_url: item.avatar_url,
      url: item.url,
    }));
    return res.status(200).send({
      total_count: result.total_count,
      incomplete_results: result.incomplete_results,
      items: refinedItems,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: 'An error occurred' });
  }
}

export async function getUserProfile(req: Request, res: Response){
  const username = req.params.username;
  try {
    const result = await getGitHubUserProfile(username);
    console.log(result);
    return res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: 'An error occurred' });
  }
}

export {}
