import React from 'react'

const MyButton = ({ onClick, buttonText, className, other }) => {
    return (
        <button className={`border-2 rounded-sm py-1 px-2 text-black ${className}`} onClick={onClick}>{buttonText}</button>
    )
}

export default MyButton;