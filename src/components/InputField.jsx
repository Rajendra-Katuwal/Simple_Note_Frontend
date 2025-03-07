import React from 'react';

const InputField = ({ type, name, value, onChange, placeholder = '' }) => {
  return (
    <input
      className="w-full px-4 py-2 border border-border rounded-md bg-bgCard text-text 
                 placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary 
                 transition-all duration-200"
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default InputField;