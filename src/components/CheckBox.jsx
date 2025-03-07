import React from 'react';

const CheckBox = ({ label, className, checked, onChange }) => {
  return (
    <div className={`flex items-center gap-2 text-text ${className}`}>
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded-md border border-checkboxBorder bg-checkboxBg
                   checked:bg-primary checked:border-primary
                   hover:border-checkboxHover transition-all duration-200
                   focus:ring-2 focus:ring-primary focus:outline-none"
      />
      <label htmlFor={label} className="cursor-pointer text-sm">{label}</label>
    </div>
  );
}

export default CheckBox;