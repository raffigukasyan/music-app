import React, {
  ReactNode,
  forwardRef,
  HTMLAttributes,
  LabelHTMLAttributes,
} from 'react';

import { Controller, FormProvider, useFormContext } from 'react-hook-form';
import type { ControllerProps, FieldValues, FieldPath } from 'react-hook-form';
import { Input } from './Input';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex items-center justify-center w-full h-screen bg-myBlack'>
      <div className='w-full max-w-[450px] py-8 px-14 bg-gray-900 rounded-md shadow-md'>
        {children}
      </div>
    </main>
  );
};

interface FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'> {
  label: string;
}

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  ...props
}: FormFieldProps<TFieldValues, TName>) => {
  const { getFieldState, formState } = useFormContext();
  const { error, invalid } = getFieldState(props.name, formState);
  return (
    <Controller
      render={({ field }) => (
        <FormItem>
          <FormLabel error={invalid}>{label}</FormLabel>
          <Input
            className={clsx(
              error
                ? 'border-red-500 shadow-xl shadow-red-700/30'
                : 'border-blueGray-700',
              'py-1.5 px-3 bg-blueGray-600 border  w-full rounded-md text-base text-white transition-all'
            )}
            {...field}
          />
          <FormMessage invalid={invalid} className='text-red-500'>
            {error?.message}
          </FormMessage>
        </FormItem>
      )}
      {...props}
    />
  );
};

export const FormItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('flex flex-col relative pb-5', className)}
      {...props}
    >
      {children}
    </div>
  );
});
FormItem.displayName = 'FormItem';

export const FormLabel = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement> & {
    children: ReactNode;
    className?: string;
    error?: boolean;
  }
>(({ children, className, error, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={clsx(
        'mb-1 text-sm transition-all',
        error ? 'text-red-500' : 'text-blueGray-100',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
});
FormLabel.displayName = 'FormLabel';

export const FormMessage = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    invalid?: boolean;
    className?: string;
  }
>(({ children, invalid, className }, ref) => {
  return (
    <AnimatePresence>
      {invalid && (
        <motion.div
          ref={ref}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={clsx('absolute bottom-0 w-full text-sm', className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});
FormMessage.displayName = 'FormMessage';

export const Form = FormProvider;
