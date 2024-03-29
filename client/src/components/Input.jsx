// import React from 'react';

export const TextInput = ({ name, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        pattern="[A-Za-z]*"
        title="Only alphabets are allowed"
      />
    </div>
  );
};

export const Dropdown = ({ name, label, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export const RadioButtonGroup = ({ name, label, value, onChange, options }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <div className="flex items-center">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center mr-6">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
              className="form-radio text-indigo-600"
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const DateInput = ({ name, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
