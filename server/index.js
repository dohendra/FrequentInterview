import express from 'express';
import formRoutes from './routes/formRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri =  process.env.MONGO;
mongoose.connect(uri).then(()=>{console.log("connected to mongo");});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', formRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
