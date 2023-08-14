import express from 'express';
import * as todoService from '../services/todo.service';
import { getTodoById } from '../services/todo.service';

export const CreateTodoHandler = async (req: express.Request, res: express.Response) => {
  const { title, content, tags, author } = req.body;
  if (!title || !author) {
    return res.status(400).send({ message: 'Title and author are required' });
  }
  if (title.length < 5 || title.length > 40) {
    return res.status(400).send({ message: 'Title must be between 5 and 40 characters' });
  }
  const createdTodo = await todoService.createTodo({
    title,
    content,
    tags,
    author,
  });
  return res.status(201).send(createdTodo);
};

export const GetAllTodosHandler = async (req: express.Request, res: express.Response) => {
  const todos = await todoService.getAllTodos();
  return res.status(200).send(todos);
};

export const UpdateTodoHandler = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const todo = await todoService.updateTodoById(id, {
      title,
      content,
    });
    return res.status(200).send(todo);
  } catch (e: any) {
    if (e.message === 'NOT_FOUND') {
      return res.status(404).send({ message: 'Todo not found' });
    }
    return res.status(400).send({ message: 'Invalid ID' });
  }
};

export const GetTodoByIdHandler = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const todo = await getTodoById(id);
    if (!todo) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    return res.status(200).send(todo);
  } catch (e) {
    return res.status(400).send({ message: 'Invalid ID' });
  }
};

export const DeleteTodoByIdHandler = async (req: express.Request, res: express.Response) => {
  const { todoId } = req.params;
  try {
    await todoService.deleteTodoById(todoId);
    return res.status(200).send({ message: 'Todo deleted successfully' });
  } catch (e: any) {
    if (e.message === 'NOT_FOUND') {
      return res.status(404).send({ message: 'Todo not found' });
    }
    return res.status(400).send({ message: 'Invalid ID' });
  }
};
