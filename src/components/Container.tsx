import React from "react";

interface ContainerProps {
  text: string;
  image: string;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  text,
  image,
  className,
}) => {
  return (
    <div
      className={`border-2 border-gray-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-auto rounded-2xl p-4 md:p-8 lg:p-12 flex justify-center items-center flex-col gap-5 bg-gray-700 ${className} hover:translate-y-2 hover:shadow-gray-400 hover:shadow-2xl`}
    >
      <img src={image} alt={text} className="h-16 w-16 md:h-20 md:w-20" />
      <h1 className="text-white font-extrabold font-mono text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {text}
      </h1>
    </div>
  );
};
