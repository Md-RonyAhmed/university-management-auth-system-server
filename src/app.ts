import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from '../src/app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

//create app
const app: Application = express();

// use cors
app.use(cors());

// json parser
app.use(express.json());

// url parser
app.use(express.urlencoded({ extended: true }));

//application route
app.use('/api/v1/users', UserRoutes);

//home route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our application');
});

//global error handler
app.use(globalErrorHandler);

export default app;
