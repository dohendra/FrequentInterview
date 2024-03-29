import { useState } from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      navigate('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="firstName" label="First Name" type="text" handleChange={handleChange} />
      {/* More <Input /> components for other fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
