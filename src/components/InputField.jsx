import React from 'react'

const InputField = ({ type, placeholder='' }) => {
  return (
    <input 
    className='border-2 border-gray-500 focus:border-black rounded-sm px-2 py-1'
    type={type} placeholder={placeholder} />
  );
}

export default InputField;