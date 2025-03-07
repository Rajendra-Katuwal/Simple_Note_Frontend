import React from 'react';

const MyButton = ({ onClick, buttonText, className }) => {
    return (
        <button
            className={`w-full px-4 py-2 rounded-md bg-primary text-text
                        hover:bg-secondary duration-200 shadow-md
                        focus:outline-none focus:ring-2 focus:ring-accent transition-all ${className}`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

export default MyButton;