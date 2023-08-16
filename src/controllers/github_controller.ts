import express from 'express';
import * as githubService from '../services/github_service';


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Hashcode's Example.
 // Search for GitHub users
 export const HandleSearchForUsers= async (req: express.Request, res: express.Response) => {
 const { searchTerm, page, perPage, sort, order } = req.query;
 try {
   const serviceResult = await githubService.searchUsers({
     searchTerm: searchTerm as string,
     page: page as unknown as number,
     perPage: perPage as unknown as number,
     sort: sort as string,
     order: order as ('asc' | 'desc'),
   });
  return res.status(200).send({
   total_count: serviceResult.result.total_count,
   incomplete_results: serviceResult.result.incomplete_results,
   items: serviceResult.refinedItems,
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
          const result = await githubService.searchByLocation({
            
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
      const result = await githubService.getProfileInformation(username);
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
      const result = await githubService.getLanguagesUsedInRepo({
        owner: owner as string,
        repo: repo as string,
      });
      return res.status(200).send(/*languages:*/Object.keys(result));
    }catch(e:any){
      console.log(e.response);
      return res.status(500).send({idan: 'An error occurred',error:e});
    }
  }