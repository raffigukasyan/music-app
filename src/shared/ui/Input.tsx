import clsx from 'clsx';

interface IInputProps {
  className?: string;
  placeholder: string;
}

export const Input = ({
  placeholder,
  className,
  ...props
}: IInputProps): JSX.Element => {
  return (
    <input
      type={'text'}
      placeholder={placeholder}
      className={clsx(
        'bg-transparent placeholder:border-none focus:outline-0 text-lg text-gray-300',
        className
      )}
      {...props}
    />
  );
};
