import  { useContext } from 'react';
import { TextInput, Dropdown, RadioButtonGroup, DateInput } from './Input';
import { FormContext } from './FormContext'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { formData, countries, states, cities } = useContext(FormContext);
  const navigate = useNavigate();
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const endpoint = 'http://localhost:3000/api/form-submit';
    try {
          const response = await axios.post(endpoint, formData);
          console.log('Server Response', response.data);

          navigate('/success');
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      // Handle errors here, such as showing a notification to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput name="firstName" label="First Name" />
      <TextInput name="lastName" label="Last Name" />
      <TextInput name="email" label="E-Mail" />
      <Dropdown name="country" label="Country" options={countries} />
      <Dropdown name="state" label="State" options={states} />
      <Dropdown name="city" label="City" options={cities} />
      <RadioButtonGroup name="gender" label="Gender" options={['Male', 'Female', 'Other']} />
      <DateInput name="dateOfBirth" label="Date of Birth" />
      <p>Age: {formData.age}</p>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
