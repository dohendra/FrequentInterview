export const isAlphabet = (input) => /^[A-Za-z]+$/.test(input);

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidDateOfBirth = (dob) => {
  // console.log(typeof dob, dob);
  
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  // console.log(age);
  return (age >= 14 && age <= 99);
};
