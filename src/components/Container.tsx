import React from 'react';

interface ContainerProps {
  text: string;
  image: string;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ text, image, className }) => {
  return (
    <div className={`bg-gray-900 p-4 rounded-lg shadow-md transition-all duration-300 ${className}`}>
      <img src={image} alt={text} className="h-16 w-16 mx-auto mb-2" />
      <h3 className="text-center text-xl font-semibold text-gray-200">{text}</h3>
    </div>
  );
};
