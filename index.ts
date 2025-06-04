import express from 'express';
import userRouter from './routes/userRoutes';

const app = express();
const PORT = 4200;


app.use('/api/v1/user', userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});