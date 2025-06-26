import { useState } from 'react';

import { motion } from 'framer-motion';

import {
  AUTH_NAVIGATION_MENU,
  NAVIGATION_MENU,
} from '@/shared/consts/navMenu.ts';
import { Icon } from '@/shared/index.ts';
import { NavigationItem } from '@/widgets/Sidebar/ui/NavigationItem.tsx';
import { NavigationList } from '@/widgets/Sidebar/ui/NavigationList.tsx';
import { OpenButton } from '@/widgets/Sidebar/ui/OpenButton.tsx';
import { variantsElement } from '../consts/animation';
export const Sidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <motion.div
      animate={isOpen ? 'visibility' : 'hidden'}
      className={
        '[grid-row:_span_3]  flex flex-col justify-between gap-y-7 h-full bg-[#22252B] py-8 px-4 rounded-2xl'
      }
    >
      {/*<motion.div>*/}
      {/*    <Logo isOpen={isOpen} />*/}
      {/*</motion.div>*/}
      <nav className={'flex flex-col gap-y-10'}>
        <NavigationList routes={NAVIGATION_MENU} />
        <NavigationList title={'Мои музыки'} routes={AUTH_NAVIGATION_MENU} />
      </nav>
      <OpenButton onClick={() => setIsOpen(!isOpen)}>
        <Icon
          type={isOpen ? 'arrowLeft' : 'arrowRight'}
          className={'max-w-6 max-h-6 text-myWhite'}
        />
        <motion.span
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={variantsElement}
        >
          Свернуть
        </motion.span>
      </OpenButton>
      <NavigationItem
        route={{
          link: '/logout',
          title: 'Выйти',
          icon: 'logout',
        }}
      />
    </motion.div>
  );
};
