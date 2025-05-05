import React from 'react';

/**
 * Button component props interface
 */
interface ButtonProps {
  /**
   * The variant of the button
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'destructive';
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * The click event handler
   */
  onClick?: () => void;
}

/**
 * Button component
 * @param {ButtonProps} props - The props for the button component
 * @returns {JSX.Element} The rendered button component
 */
const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
