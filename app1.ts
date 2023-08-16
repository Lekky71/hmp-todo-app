// APIs
// Application Programming Interface
// REST API
// Representational State Transfer API

// HTTP/2
// HTTP Methods
// GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD

// HTTP Status Codes
// 1xx - Informational
// 2xx - Success
// 3xx - Redirection
// 4xx - Client Error
// 5xx - Server Error

// HTTP Headers
// Content-Type
// Accept
// Authorization
// Cookie

// Request Body
// Response Body

// HOST
// PORT
// http://127.0.0.1:3000
import { getGitHubUserProfile, searchGitHubUsers } from './src/client/github.client';

require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { TodoModel } from './src/models/todo';
import { firstDocument, secondDocument } from './src/sample.data';
import todoRouter from './src/routes/todo';


const app = express();
app.use(bodyParser.json());

// Components of a REST API
// 1. Resource
// 2. Endpoint
// 3. HTTP Method
// 4. Request Body
// 5. Response Body
// 6. Status Code

// Express
// Route/Endpoint, method, middlewares, handler
// Example: https://www.google.com/search?q=nigeria+super+falcons&oq=nigeria+super+falcons&gs_lcrp

app.get('/', (req: express.Request, res: express.Response) => {
  return res.status(200).send('Hello guys, welcome to Opolo Hub!');
});

app.get('/about', (req: express.Request, res: express.Response) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.query);
  return res.status(200).send('This is the about page');
});

app.get('/students', (req: express.Request, res: express.Response) => {
  return res.status(404).send('Page Not Found');
});

app.use('/todos', todoRouter);

app.get('/github/users', async (req: express.Request, res: express.Response) => {
  // Search for GitHub users
  const { searchTerm, page, perPage, sort, order } = req.query;
  try {
    const result = await searchGitHubUsers({
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
    return res.status(500).send({ message: 'An error occurred' });
  }
});

app.get('/github/users/:username', async (req: express.Request, res: express.Response) => {
  const username = req.params.username;
  try {
    const result = await getGitHubUserProfile(username);
    console.log(result);
    return res.status(200).send(result);
  } catch (e: any) {
    console.log(e);
    return res.status(500).send({ message: 'An error occurred' });
  }
});

app.listen(5672, async () => {
  console.log('Server is running at http://localhost:5672');
  await mongoose.connect('mongodb://127.0.0.1/hmp-todo-app');
  console.log('Connected to MongoDB');
});

export {};

// ASSIGNMENT: Tested and working. You should create a Pull Request to my repo
// 1. Create a new endpoint that receives a city name and returns a list of developers on GitHub in that city. e.g [q=location:nigeria]
// 2. Create a new endpoint that receives a username and returns the user's profile information.
// 3. Create a new endpoint that receives a GitHub repository URL and then returns the programming languages used in that repository.
// [https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-languages]
