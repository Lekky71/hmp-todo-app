export const firstDocument = {
  title: 'My First Blog Post',
  content: 'This is my first blog post',
  tags: ['node', 'express', 'javascript'],
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const secondDocument = {
  title: 'My Second Blog Post',
  content: false,
  tags: ['node', 7, 'javascript'],
  author: 'Harrison',
};

console.log(firstDocument);
console.log(secondDocument);
// process.env is used to access environment variables in NodeJs
console.log(process.env.NODE_ENV);
