import * as githubService from '../services/github.service';
import express from 'express';

export const HandleGetUsers = async (req: express.Request, res: express.Response) => {
  const { searchTerm, page, perPage, sort, order } = req.query;
  try {
    const svcResult = await githubService.searchUsers({
      searchTerm: searchTerm as string,
      page: page as unknown as number,
      perPage: perPage as unknown as number,
      sort: sort as string,
      order: order as ('asc' | 'desc'),
    });
    return res.status(200).send({
      total_count: svcResult.result.total_count,
      incomplete_results: svcResult.result.incomplete_results,
      items: svcResult.refinedItems,
    });
  } catch (e: any) {
    console.log(e.response);
    return res.status(500).send({ message: 'An error occurred' });
  }
};
