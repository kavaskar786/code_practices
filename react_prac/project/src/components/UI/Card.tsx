import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  glow = false 
}) => {
  return (
    <div
      className={`
        card p-6 
        ${hover ? 'card-hover' : ''} 
        ${glow ? 'animate-pulse-glow' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;