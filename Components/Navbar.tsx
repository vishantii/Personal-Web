import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer, Text } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaUser, FaRocket, FaHome } from 'react-icons/fa';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const router = useRouter();

  return (
    <>
      <VStack as="header" boxShadow="0px 4px 14px 1px rgba(0, 0, 0, 0.15);" borderRadius="12px">
        <Flex w="100%" align="center" maxWidth={800} margin="0 auto" padding={4}>
          <Link href="/">
            <a>
              <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
                Kejauhan
              </Heading>
            </a>
          </Link>
          <Spacer></Spacer>
          <Link href="/">
            <a>
              <IconButton aria-label="next" ml={1} icon={<FaHome />}></IconButton>
            </a>
          </Link>
          <Link href="/">
            <a>
              <IconButton aria-label="next" ml={1} icon={<FaRocket />}></IconButton>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <IconButton aria-label="next" ml={1} icon={<FaUser />}></IconButton>
            </a>
          </Link>
          <IconButton aria-label="next" ml={1} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}></IconButton>
        </Flex>
      </VStack>
    </>
  );
};
export default Navbar;
