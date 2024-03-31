import { isAlphabet, isValidEmail, isValidDateOfBirth } from '../utilities/validation.js';

const validateForm = (req, res, next) => {
  const { firstName, lastName, email, dateOfBirth } = req.body;
  // console.log(typeof dateOfBirth);
  // console.log(typeof firstName, firstName);
  try {
    if (!isAlphabet(firstName) || !isAlphabet(lastName)) {
      throw new Error('Names must contain alphabets only.');
    }
    if (!isValidEmail(email)) {
      throw new Error('Invalid email format.');
    }
    if (!isValidDateOfBirth(dateOfBirth)) {
      console.log(dateOfBirth, typeof dateOfBirth);  //undefined dob
      throw new Error('Date of birth must make age older than 14 and less than 99 years.');
    }

    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default validateForm;
