import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './FormContext';

export const TextInput = ({ name, label }) => {
    const { formData, handleChange } = useContext(FormContext);
    return (
        <div>
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export const Dropdown = ({ name, label }) => {
    const { formData, handleChange, countries, states, cities } = useContext(FormContext);
    let options = [];
    if (name === 'country') options = countries;
    else if (name === 'state') options = states;
    else if (name === 'city') options = cities;

    return (
        <div>
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
                <option value="">Select {label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export const RadioButtonGroup = ({ name, label, options }) => {
    const { formData, handleChange } = useContext(FormContext);
    return (
        <fieldset>
            <legend className="block text-gray-700 text-sm font-bold mb-2">{label}</legend>
            {options.map((option, index) => (
                <label key={index} className="inline-flex items-center mr-6">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={formData[name] === option}
                        onChange={handleChange}
                        className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">{option}</span>
                </label>
            ))}
        </fieldset>
    );
};
RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export const DateInput = ({ name, label }) => {
    const { formData, handleChange } = useContext(FormContext);
    return (
        <div>
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type="date"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};
DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
