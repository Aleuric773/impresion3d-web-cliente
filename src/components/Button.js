import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'px-6 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantStyle = '';
  switch (variant) {
    case 'secondary':
      variantStyle = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
      break;
    case 'danger':
      variantStyle = 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400';
      break;
    case 'primary':
    default:
      variantStyle = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

