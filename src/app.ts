// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/Student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  // const a=10;
  // console.log(a);
  res.send("hello world");
});

// application api
app.use('/api/v1/students',studentRoutes)
// app.get('/a', (req: Request, res: Response) => {
//   const a=160;
//   console.log(a);
//   res.send(`${a}`);
// });
export default app;
