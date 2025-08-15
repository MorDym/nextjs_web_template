import React from 'react';
import type { SwitchButtonProps } from '../../data/type';

function SwitchButton({checked, onChange, disabled}: SwitchButtonProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => {
        if (!disabled) onChange(!checked);
      }}
      disabled={disabled}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full 
        transition-colors duration-300 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-blue-500
        ${checked ? "bg-blue-600" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white 
          transition-transform duration-300
          ${checked ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}

export default SwitchButton