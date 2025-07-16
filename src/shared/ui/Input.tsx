import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type='text'
        className={clsx(
          'bg-transparent placeholder:border-none focus:outline-0 text-lg text-gray-300',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
