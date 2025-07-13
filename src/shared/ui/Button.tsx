import { ReactNode } from 'react';

import clsx from 'clsx';

interface IButtonProps {
  children: ReactNode;
  className: string;
}

export const Button = ({ children, className }: IButtonProps) => {
  return (
    <button
      className={clsx(className, 'text-md text-center w-full border-none rounded-md py-2.5')}
    >
      {children}
    </button>
  );
};
