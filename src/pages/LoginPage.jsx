import React, { useState } from 'react'
import InputField from '../components/InputField'
import MyButton from '../components/MyButton'
import CheckBox from '../components/CheckBox'
const LoginPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-10'>
      <form method="post" className='flex flex-col min-w-2xs max-w-sm px-8 py-5 rounded-xl bg-slate-200 gap-2'>
        <h2 className='text-center font-bold text-lg'>Login</h2>
        <InputField type="text" name="username" id="username" />
        <InputField type={isChecked ? "text" : "password"} name="password" id="password" />
        <CheckBox label="Show Password" className="mt-2" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        <MyButton buttonText={"Login"} />
      </form>
    </div>
  );
}

export default LoginPage;