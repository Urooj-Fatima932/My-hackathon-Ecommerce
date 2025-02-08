// Button.tsx
'use client'
interface ButtonProps {
    text: string; 
    className?:string // The text that will appear on the button
    // Optional onClick handler
    onClick?: () => void;
    type?:string|any
    disabled?:string|any
}
  
  const Button: React.FC<ButtonProps> = ({ className,type,text,onClick,disabled }) => {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`bg-black ${className} text-white font-medium py-2 px-5  rounded-[20px] hover:bg-zinc-600`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  