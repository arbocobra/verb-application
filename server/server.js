import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './express.js'

dotenv.config();

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.error(err));

app.listen(port, () => {
   console.log(`Server is running on ${port}`);
});