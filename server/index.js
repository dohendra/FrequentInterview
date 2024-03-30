import express from 'express';
import formRoutes from './routes/formRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const uri = process.env.MONGO;
mongoose.connect(uri).then(()=>{console.log("connected to mongo");}).catch(err => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', formRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
