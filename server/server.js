import express from 'express';
import cors from 'cors';
import verbs from './routes/verb.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors())
app.use(express.json())
app.use('/verbs', verbs)

app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`)
});