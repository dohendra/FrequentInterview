import express from 'express';
import validateForm from '../middleware/validateForm.js';

const router = express.Router();

router.post('/submit-form', validateForm, (req, res) => {
  // After passing validation, store the data
  // ...

  res.status(200).json({ message: 'Data stored successfully' });
});

export default router;
