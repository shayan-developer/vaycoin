import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-gradient text-white font-bold py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
