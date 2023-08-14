import express from 'express';
import {
  CreateTodoHandler,
  DeleteTodoByIdHandler,
  GetAllTodosHandler,
  GetTodoByIdHandler,
  UpdateTodoHandler
} from '../controllers/todo.controller';

const router = express.Router();

router.post('/', CreateTodoHandler);

router.get('/', GetAllTodosHandler);

// Update a particular item
router.put('/:id', UpdateTodoHandler);

// Get an item by ID
router.get('/:id', GetTodoByIdHandler);

// Delete an item by ID
router.delete('/:todoId', DeleteTodoByIdHandler);

export default router;
