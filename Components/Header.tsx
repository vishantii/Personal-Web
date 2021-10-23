import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Stack, Flex, Box, Text, Heading, VStack } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/icon';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';
import { Main } from './Motion/MotionStack';
import { useDesktopWidthCheck } from './Checker';
const Header = () => {
  const isDesktopWidth = useDesktopWidthCheck();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  return (
    <>
      <Main>
        <Stack as="main" align="center">
          <Flex direction={['column', 'row']}>
            <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
              <Text fontSize="4xl" fontWeight="semibold">
                Hi, I am
              </Text>
              <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, teal.300,pink.300, pink.500)" bgClip="text">
                Mohamad Farhan
              </Text>
              <Text fontSize="2xl" color={isDark ? 'gray.200' : 'gray.500'}>
                Welcome To My Personal Website
              </Text>
            </Box>
            <Box ml={20} alignSelf="center" mb={isNotSmallerScreen ? '0' : '12'} mt={isNotSmallerScreen ? '0' : '12'}>
              {isDesktopWidth && <Image maxWidth="42rem" borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src="/img/han.jpg" alt="" />}
            </Box>
          </Flex>
          <Stack>
            <Box alignSelf="center">
              <IconButton aria-label="" icon={<FaLinkedin />} onClick={() => window.open('https://www.linkedin.com/in/mohamad-farhan-7469bb1b3/')}></IconButton>
              <IconButton aria-label="" ml={2} icon={<FaInstagram />} onClick={() => window.open('https://www.instagram.com/farhannmf_/')}></IconButton>
              <IconButton aria-label="" ml={2} icon={<FaGithub />} onClick={() => window.open('https://github.com/kejauhan')}></IconButton>
            </Box>
          </Stack>
        </Stack>
      </Main>
    </>
  );
};
export default Header;
