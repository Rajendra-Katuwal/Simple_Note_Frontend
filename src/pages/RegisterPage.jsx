import React, { useState } from 'react';
import InputField from '../components/InputField';
import MyButton from '../components/MyButton';
import CheckBox from '../components/CheckBox';
import useForm from '../hooks/useForm';
import { handleRegister } from '../api/authService';

const RegisterPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { formData, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    var response = await handleRegister(formData);
    console.log(response);
    resetForm();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-bg text-text">
      <form className="flex flex-col min-w-2xs max-w-sm px-8 py-6 rounded-xl bg-bgCard gap-3 border border-border shadow-lg">
        <h2 className="text-center font-bold text-xl text-primary">Register</h2>

        <InputField
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          id="username"
          placeholder="Username"
          className="w-full px-4 py-2 border border-border rounded-md bg-transparent text-text placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <InputField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-border rounded-md bg-transparent text-text placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <InputField
          type={isChecked ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-border rounded-md bg-transparent text-text placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <CheckBox
          label="Show Password"
          className="mt-2 text-text"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />

        <MyButton
          buttonText="Register"
          onClick={handleSubmit}
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default RegisterPage;
