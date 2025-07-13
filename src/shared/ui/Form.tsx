import { ReactNode } from 'react';

import { Controller } from 'react-hook-form';
import type { ControllerProps } from 'react-hook-form';
export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <main className='w-full h-screen flex justify-center items-center bg-myBlack'>
      <div className='w-full max-w-[450px] py-8 px-14 bg-gray-900 rounded-md shadow-md'>
        {children}
      </div>
    </main>
  );
};

export const FormField = ({ render, ...props }: ControllerProps) => {
  return (
    <div className='flex flex-col'>
      <Controller render={render} {...props} />
    </div>
  );
};

export const FormLabel = ({ children }: { children: ReactNode }) => {
  return <label>{children}</label>;
};
