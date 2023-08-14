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
import { searchGitHubUsers } from './src/client/github.client';
import { GitHubGetProfile } from './src/client/github.profile';

require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { TodoModel } from './src/models/todo';
import { firstDocument, secondDocument } from './src/sample.data';

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

app.post('/todos', async (req: express.Request, res: express.Response) => {
  const { title, content, tags, author } = req.body;
  if (!title || !author) {
    return res.status(400).send({ message: 'Title and author are required' });
  }
  if (title.length < 5 || title.length > 40) {
    return res.status(400).send({ message: 'Title must be between 5 and 40 characters' });
  }
  const createdTodo = await TodoModel.create({
    title,
    content,
    tags,
    author,
  });
  return res.status(201).send(createdTodo);
});

app.get('/todos', async (req: express.Request, res: express.Response) => {
  const todos = await TodoModel.find();
  return res.status(200).send(todos);
});

// Update a particular item
app.put('/todos/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const todo = await TodoModel.findById(id);
  if (!todo) {
    return res.status(404).send({ message: 'Todo not found' });
  }
  if (title) {
    todo.title = title;
  }
  if (content) {
    todo.content = content;
  }
  await todo.save();
  return res.status(200).send(todo);
});

// Get an item by ID
app.get('/todos/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const todo = await TodoModel.findById(id);
    if (!todo) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    return res.status(200).send(todo);
  } catch (e) {
    return res.status(400).send({ message: 'Invalid ID' });
  }
});

// Delete an item by ID
app.delete('/todos/:todoId', async (req: express.Request, res: express.Response) => {
  const { todoId } = req.params;
  try {
    const todo = await TodoModel.findById(todoId);
    if (!todo) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    // then delete
    await todo.deleteOne();
    return res.status(200).send({ message: 'Todo deleted successfully' });
  } catch (e) {
    return res.status(400).send({ message: 'Invalid ID' });
  }
});

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
// Github users in the city
app.get ('/github/users/in/:city', async (req: express.Request, res: express.Response) => {
const {city} = req.params;
try {
    const result = await searchGitHubUsers ({
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
})
app.get('/github/users/:profile', async (req: express.Request, res: express.Response) => {
    const {name, bio, location , followers} = req.query;
    try {
        const newResult = await GitHubGetProfile({
            name: name as string,
            bio: bio as string,
            location: location as string,
            followers: followers as string
        });
        const refinedItems = newResult.items.map((item: any) => {
          return {
            name: item.name,
            bio: item.bio,
            location: item.location,
            followers: item.followers,
          };
        });
        return res.status(200).send({
          total_count: newResult.total_count,
          incomplete_results:newResult.incomplete_results,
          items: refinedItems,
        });
    
      } catch (e: any) {
        console.log(e.response);
        return res.status(500).send({ message: 'An error occurred' });
      }
            
       
   
});
/*
// Assignment 3 Get user's programming language through url
app.get('/github/languages/:url', async(req: express.Request, res: express.Response) => {
    const {url} = req.params;
    const refinedResult = Object.entries(result).map(([language, bytes]) => {
        return {
          language,
          percentage: `${((bytes / result.total) * 100).toFixed(2)}%`,
        };
      });
      return res.status(200).send(refinedResult);
    } catch (e: any) {
      console.log(e.response);
      return res.status(500).send({ message: 'An error occurred' });
    }
})
*/
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
