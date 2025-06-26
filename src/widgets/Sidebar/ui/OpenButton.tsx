import { FC } from 'react';
import { variantsItem } from '../consts/animation';
import { motion } from 'framer-motion';
interface OpenButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const OpenButton: FC<OpenButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <motion.button
      variants={variantsItem}
      className={`py-3   bg-[#37393F] text-myWhite flex items-center justify-center gap-x-3 rounded-3xl ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
