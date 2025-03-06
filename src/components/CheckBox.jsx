import React from 'react'

const CheckBox = ({ label, className, checked, onChange }) => {
    return (
        <div className={`flex gap-2 ${className}`}>
            <input type="checkbox" name={label} checked={checked} onChange={onChange} />
            <label htmlFor={label}>{label}</label>
        </div>
    );
}

export default CheckBox;