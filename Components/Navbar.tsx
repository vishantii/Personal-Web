import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon } from 'react-icons/fa';
import Drawer from './Drawer';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <>
      <VStack as="header" boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);" borderRadius="12px">
        <Flex w="100%" align="center" maxWidth={800} margin="0 auto" padding={4}>
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            Kejauhan
          </Heading>
          <Spacer></Spacer>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
          <Drawer />
        </Flex>
      </VStack>
    </>
  );
};
export default Navbar;
