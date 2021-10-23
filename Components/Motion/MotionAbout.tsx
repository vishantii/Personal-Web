import MotionStack from './Motion';
import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

export const MainAbout = ({ children }: MainProps) => (
  <MotionStack
    variants={{
      before: { opacity: 0, y: 25, transition: { type: 'spring' } },
      after: { opacity: 1, y: 0, transition: { type: 'spring' } },
    }}
    initial="before"
    animate="after"
    width="100%"
    pt="4rem"
    px={2}
    mt={8}
    spacing={4}
  >
    {children}
  </MotionStack>
);
