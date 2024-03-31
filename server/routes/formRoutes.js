import express from 'express';
import validateForm from '../middleware/validateForm.js';
import User from '../models/user.js';
import axios from 'axios';
import dotenv from  'dotenv';
dotenv.config();

const router = express.Router();
const accessToken = process.env.auth_token;

// Fetch countries
router.get('/countries', async (req, res) => {
  try {
    const response = await axios.get('https://www.universal-tutorial.com/api/countries/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Fetch states
router.get('/states/:country', async (req, res) => {
  try {
    const { country } = req.params;
    const response = await axios.get(`https://www.universal-tutorial.com/api/states/${country}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      }
    });
       res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Fetch cities
router.get('/cities/:state', async (req, res) => {
  try {
    const { state } = req.params;
    const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post('/form-submit', validateForm, async (req, res) => 
  {  
    try 
    {
      const newUser = new User(req.body);
      // console.log(newUser);
      await newUser.save();
      res.status(201).json({ message: 'Data stored successfully', user: newUser });
    } 
    catch (error) 
    {
    console.error('Error saving data to the database:', error);
    res.status(500).json({ message: 'Error saving data to the database' });
    }
  }
);

export default router;