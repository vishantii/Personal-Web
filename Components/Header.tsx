import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { VStack, Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/button';

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:42rem)');
  return (
    <VStack p={5}>
      <Stack>
        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} spacing="200px" p={isNotSmallerScreen ? '32' : '0'} alignSelf="flex-end">
          <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">
              Hi, I am
            </Text>
            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, pink.600)" bgClip="text">
              Mohamad Farhan
            </Text>
            <Text fontSize="2xl" color={isDark ? 'gray.200' : 'gray.500'}>
              Welcome To My Personal Website
            </Text>
          </Box>
          <Image
            alignSelf="center"
            ml={isNotSmallerScreen ? '25' : '0'}
            mt={isNotSmallerScreen ? '0' : '12'}
            mb={isNotSmallerScreen ? '0' : '12'}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="300px"
            src="/img/han.jpg"
            alt="photo"
          />
        </Flex>
        <Flex alignSelf="center">
          <IconButton aria-label="next2" icon={<FaLinkedin />} onClick={() => window.open('https://www.linkedin.com/in/mohamad-farhan-7469bb1b3/')}></IconButton>
          <IconButton aria-label="next2" ml={2} icon={<FaInstagram />} onClick={() => window.open('https://www.instagram.com/farhannmf_/')}></IconButton>
          <IconButton aria-label="next2" ml={2} icon={<FaGithub />} onClick={() => window.open('https://github.com/kejauhan')}></IconButton>
        </Flex>
      </Stack>
    </VStack>
  );
};
export default Header;
