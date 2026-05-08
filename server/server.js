import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './express.js'
import dns from 'dns';

dotenv.config();

const port = process.env.PORT;
dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.connect(process.env.MONGO_URI, {family:4})
   .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.error(err));

app.listen(port, '127.0.0.1', () => {
   console.log(`Server is running on ${port}`);
});