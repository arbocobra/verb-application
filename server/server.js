import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import verbRoutes from './db/routesVerb.js';
import app from './express.js'

dotenv.config();

// const app = express();
const port = process.env.PORT;
// app.use(cors());
// app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.error(err));

// app.use('/verbs', verbRoutes);

app.listen(port, () => {
   console.log(`Server is running on ${port}`);
});