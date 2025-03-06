import React, { useState } from 'react'
import InputField from '../components/InputField'
import MyButton from '../components/MyButton'
import CheckBox from '../components/CheckBox'
const RegisterPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-10'>
      <form className='flex flex-col min-w-2xs max-w-sm px-8 py-5 rounded-xl bg-slate-200 gap-2 border-2 border-black'>
        <h2 className='text-center font-bold text-lg'>Registration</h2>
        <InputField type="text" name="username" id="username" placeholder='Username'/>
        <InputField type="email" name="email" id="email" placeholder='Email'/>
        <InputField type={isChecked ? "text" : "password"} name="password" id="password" placeholder='Password'/>
        <InputField type={isChecked ? "text" : "password"} name="re-password" id="re-password" placeholder='Confirm Password'/>
        <CheckBox label="Show Password" className="mt-2" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        <MyButton buttonText={"Register"} />
      </form>
    </div>
  );
}

export default RegisterPage;