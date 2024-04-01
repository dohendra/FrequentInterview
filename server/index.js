import express from 'express';
import formRoutes from './routes/formRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
dotenv.config();

const uri = process.env.MONGO;
mongoose.connect(uri).then(()=>{console.log("connected to mongo");}).catch(err => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Web service is live!');
});
// Serve static files from the React app build directory
const __dirname=path.resolve();
app.use(express.static(path.join(__dirname, 'client/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'client','build','index.html'));
});
app.use(cors());
app.use(express.json());
app.use('/api', formRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
