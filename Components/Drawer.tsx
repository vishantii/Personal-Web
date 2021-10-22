import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, IconButton, useDisclosure, Button, Box } from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { Link } from '@chakra-ui/layout';

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <>
      <IconButton ml={2} icon={<HiMenu />} ref={inputField} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={inputField}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Box>
                <Link to="/about">
                  <Button colorScheme="orange" isFullWidth>
                    About
                  </Button>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
export default DrawerMenu;
