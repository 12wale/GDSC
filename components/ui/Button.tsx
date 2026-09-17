import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'small' | 'normal' | 'wide';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'normal',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center cursor-pointer gap-[8px] rounded-[12px] justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#20B15A] text-white hover:bg-[#20b15ac4]', // Google Green
    outline: 'border-2 border-[#0f9d58] text-[#0f9d58] hover:bg-green-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  const sizes = {
    small: "",
    normal: "w-[91px] h-[38px] ",
    wide: "w-[142px] h-[44px]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
