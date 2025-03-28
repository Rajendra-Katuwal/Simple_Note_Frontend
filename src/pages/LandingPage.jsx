import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeSelectionMenu from '../components/ThemeSelectionMenu';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-bg text-text">
            <ThemeSelectionMenu className='absolute top-4 right-4 focus:border-focus border-border z-30'/>
            <img
                    src="https://images.unsplash.com/photo-1726653024714-42857c1b4906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5vdGVzJTIwYXBwfGVufDB8fDB8fHww"
                    alt="Note Taking Illustration"
                    className="w-screen h-screen object-cover object-center opacity-20 absolute z-1"
                />
            <header className="text-center mb-8 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to SimpleNoteApp</h1>
                <p className="text-lg md:text-xl text-placeholder">
                    Your simple and efficient note-taking solution.
                </p>
            </header>
            <main className="flex flex-col items-center space-y-4 z-20">
                <div className="flex space-x-4">
                    <button
                        className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-focus"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <button
                        className="px-6 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-focus"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;