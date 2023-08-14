import { TodoModel } from '../models/todo';
import { CreateTodoRequestBody, UpdateTodoRequestBody } from '../interfaces/todo.types';

export const createTodo = async function (body: CreateTodoRequestBody): Promise<any> {
  const { title, content, tags, author } = body;
  return await TodoModel.create({
    title,
    content,
    tags,
    author,
  });
};

export const getAllTodos = async function (): Promise<any> {
  return TodoModel.find();
}

export const updateTodoById = async function (id: string, body: UpdateTodoRequestBody): Promise<any> {
  const todo = await TodoModel.findById(id);
  const { title, content } = body;
  if (!todo) {
    throw new Error('NOT_FOUND');
  }
  if (title) {
    todo.title = title;
  }
  if (content) {
    todo.content = content;
  }
  await todo.save();
  return todo;
}

export const getTodoById = async function (id: string): Promise<any> {
  return TodoModel.findById(id);
}

export const deleteTodoById = async function (id: string): Promise<any> {
  const todo = await TodoModel.findById(id);
  if (!todo) {
    throw new Error('NOT_FOUND');
  }
  // then delete
  await todo.deleteOne();
}
