import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
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
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => 
    {
      const response = await axios.get('/api/countries');
      setCountries(response.data.map((country) => country.country_name));
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country) return;
      const response = await axios.get(`/api/states/${formData.country}`);
      setStates(response.data.map((state) => state.state_name));
    };

    fetchStates();
  }, [formData.country]);

  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.state) return;
      const response = await axios.get(`/api/cities/${formData.state}`);
      setCities(response.data.map((city) => city.city_name));
    };

    fetchCities();
  }, [formData.state]);
  
  
    // Age calculation function
    const calculateAge = (date) => {
      const birthday = new Date(date);
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      ...(name === 'dateOfBirth' && { age: calculateAge(value) }),
    }));
  };

  const contextValue = {
    formData,
    setFormData,
    handleChange,
    countries,
    states,
    cities,
  };

  return (
      <FormContext.Provider value={{contextValue}}>
      {children}
    </FormContext.Provider>
  );
  
  
};
FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default FormContext;
