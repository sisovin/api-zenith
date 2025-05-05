import React from 'react';

/**
 * Card component props interface
 */
interface CardProps {
  /**
   * The content of the card
   */
  children: React.ReactNode;
  /**
   * The header content of the card
   */
  header?: React.ReactNode;
  /**
   * The footer content of the card
   */
  footer?: React.ReactNode;
}

/**
 * Card component
 * @param {CardProps} props - The props for the card component
 * @returns {JSX.Element} The rendered card component
 */
const Card: React.FC<CardProps> = ({ children, header, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {header && <div className="bg-gray-100 px-4 py-2 border-b">{header}</div>}
      <div className="p-4">{children}</div>
      {footer && <div className="bg-gray-100 px-4 py-2 border-t">{footer}</div>}
    </div>
  );
};

export default Card;
