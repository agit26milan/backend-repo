import express from 'express';

const app = express();
const PORT = 4200;

app.get('/', (_req, res) => {
  res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});