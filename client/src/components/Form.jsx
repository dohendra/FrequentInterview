import { useState, useEffect } from 'react';
import { TextInput, Dropdown, RadioButtonGroup, DateInput } from './Inputs';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    city: '',
    gender: '',
    dateOfBirth: '',
    age: '', // Will be calculated automatically
  });

  // Dummy country, state, and city data
  // In a real-world scenario, fetch these from an API
  const [countries, setCountries] = useState(['Country A', 'Country B']);
  const [states, setStates] = useState(['State A1', 'State A2']); // States for 'Country A'
  const [cities, setCities] = useState(['City A1', 'City A2']); // Cities for 'State A1'

  useEffect(() => {
    // Here you would fetch the countries list from the API and update the state
    // setCountries(fetchedCountries);

    // After fetching, pre-select the first country if needed
    // setFormData(prev => ({ ...prev, country: fetchedCountries[0] }));
  }, []);

  useEffect(() => {
    // Based on the selected country, fetch states
    // setStates(fetchedStatesForCountry);

    // Reset state and city when country changes
    setFormData(prev => ({ ...prev, state: '', city: '' }));
  }, [formData.country]);

  useEffect(() => {
    // Based on the selected state, fetch cities
    // setCities(fetchedCitiesForState);
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // If the date of birth changes, calculate the age
    if (name === 'dateOfBirth') {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      setFormData({ ...formData, age: age.toString() });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic
    console.log('Form Data', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} />
      <TextInput name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} />
      <TextInput name="email" label="E-Mail" value={formData.email} onChange={handleChange} />
      <Dropdown name="country" label="Country" value={formData.country} onChange={handleChange} options={countries} />
      <Dropdown name="state" label="State" value={formData.state} onChange={handleChange} options={states} />
      <Dropdown name="city" label="City" value={formData.city} onChange={handleChange} options={cities} />
      <RadioButtonGroup name="gender" label="Gender" value={formData.gender} onChange={handleChange} options={['Male', 'Female', 'Other']} />
      <DateInput name="dateOfBirth" label="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
      <TextInput name="age" label="Age" value={formData.age} onChange={() => {}} />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
