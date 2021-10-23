import MotionStack from './Motion';
import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

export const MainProfile = ({ children }: MainProps) => (
  <MotionStack
    variants={{
      before: { opacity: 0, y: 25, transition: { type: 'spring' } },
      after: { opacity: 1, y: 0, transition: { type: 'spring' } },
    }}
    initial="before"
    animate="after"
  >
    {children}
  </MotionStack>
);
