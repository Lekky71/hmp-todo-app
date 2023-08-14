export interface CreateTodoRequestBody {
  title: string,
  content: string,
  tags: string[],
  author: string,
}

export interface UpdateTodoRequestBody {
  title: string,
  content: string,
}
