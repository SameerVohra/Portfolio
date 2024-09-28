type ContainerProps = {
  text: string;
  image: string;
  className: string;
};

export function Container({ text, image, className }: ContainerProps) {
  return (
    <div className={`flex items-center justify-start p-2 ${className}`}>
      <img src={image} alt={text} className="w-8 h-8 mr-2" />
      <span className="text-white font-semibold">{text}</span>
    </div>
  );
}
