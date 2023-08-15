import express from 'express';
import * as githubService from '../services/github_service';


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Hashcode's Example.
 // Search for GitHub users
 export const SearchForUsers= async (req: express.Request, res: express.Response) => {
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

 } catch (e: any) {
   console.log(e.response);
   return res.status(500).send({ message: e.message || "an error occured" });
  }
}
 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Get users in specific Locations.
 export const UserbyLocationn = async(req:express.Request,res:express.Response)=>{
        const {order,searchTerm}=req.query
        try{
          const result = await githubService.getUsersInSpecificLocation({
            
            order: order as ('asc' | 'desc'),
            searchTerm: searchTerm as string,
          });
          return res.status(200).send(result);
        }catch(e:any){
          console.log(e);
          return res.status(500).send({Yo: 'An error occurred!'});
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Get User Profile info.
export const UserProfileinfo = async (req: express.Request, res: express.Response) => {
    const username = req.params.username;
    try {
      const result = await githubService.getGitHubUserProfile(username);
      //console.log(result);
      return res.status(200).send(result);
    } catch (e: any) {
      console.log(e);
      return res.status(500).send({ message: 'An error occurred' });
    }
  }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Question 3. get Repo languages
export const GetRepoLanguages =  async (req:express.Request,res:express.Response)=>{
    const {owner,repo}=req.query;
    try{
      const result = await githubService.GetGithubUserRepoLangs({
        owner: owner as string,
        repo: repo as string,
      });
      return res.status(200).send(/*languages:*/Object.keys(result));
    }catch(e:any){
      console.log(e.response);
      return res.status(500).send({idan: 'An error occurred',error:e});
    }
  }