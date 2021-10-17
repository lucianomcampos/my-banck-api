import express from 'express';
const port = 3000;
import { promises as fs } from 'fs';
import accountsRouter from './routes/account.routes.js';
global.fileName = 'accounts.json';
const app = express();
app.use(express.json());
app.use('/account', accountsRouter);
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
