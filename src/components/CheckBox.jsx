import React from "react";

const CheckBox = ({ label, className, checked, onChange }) => {
  return (
    <div className={`flex items-center gap-2 text-text ${className}`}>
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded-md border border-border bg-bg-card 
                   checked:bg-primary checked:border-primary
                   hover:border-hover transition-all duration-200
                   focus:ring-2 focus:ring-focus focus:outline-none shadow-sm shadow-shadow"
      />
      <label htmlFor={label} className="cursor-pointer text-sm">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
