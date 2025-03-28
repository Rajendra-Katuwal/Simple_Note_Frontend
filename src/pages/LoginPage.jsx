import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import MyButton from "../components/MyButton";
import CheckBox from "../components/CheckBox";
import useForm from "../hooks/useForm";
import { handleLogin } from "../api/authService";
import useLocalStorage from "../hooks/useLocalStorage";
import ThemeSelectionMenu from "../components/ThemeSelectionMenu";

const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { formData, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var response = await handleLogin(formData);
    console.log(response);
    resetForm();
  };

  useEffect(() => { }, []);

  return (
    <div className="relative h-screen w-screen flex justify-center items-center bg-bg text-text">
      <ThemeSelectionMenu className='absolute top-4 right-4 focus:border-focus border-border'/>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col min-w-2xs max-w-sm px-8 py-6 rounded-xl bg-bgCard gap-4 
                   border border-border shadow-lg shadow-shadow"
      >
        <h2 className="text-center font-bold text-2xl text-primary">Login</h2>

        <InputField
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full"
        />

        <InputField
          type={isChecked ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full"
        />

        <CheckBox
          label="Show Password"
          className="mt-2"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />

        <MyButton buttonText="Login" className="mt-4" />

        {/* Future enhancements: Forgot Password or Register links */}
        <div className="text-center text-sm text-placeholder mt-2">
          <a href="#" className="text-primary hover:underline">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
