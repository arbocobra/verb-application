import express from 'express';
import path from 'path';
import cors from 'cors';
import verbRoutes from './db/routesVerb.js';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use('/api/verbs', verbRoutes);
app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.get('/v1', (_, res) => {
    res.json({
      project:"Portuguese Practice App"
    });
});

app.get('/', (_, res) => {
  res.send('Welcome to the Back-End!');
});

export default app;