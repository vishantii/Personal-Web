import Navbar from '../Components/Navbar';
import { MainAbout } from '../Components/Motion/MotionAbout';
import { Stack, Text, Heading, Flex, Box, Container } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useDesktopWidthCheck } from '../Components/Checker';
import { Icon } from '@chakra-ui/icon';
import { useColorMode } from '@chakra-ui/color-mode';
import { GrBlockQuote } from 'react-icons/gr';
import { IconButton } from '@chakra-ui/button';
import { FaAndroid, FaAngular } from 'react-icons/fa';
import { SiReact, SiChakraui, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import AppHeader from './AppHeader';

const Content = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const isDesktopWidth = useDesktopWidthCheck();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <>
      <AppHeader title="About Me" pageDesc="Welcome" />
      <Navbar />
      <MainAbout>
        <Stack spacing={isNotSmallerScreen ? 4 : 3} as="main" align="center">
          <Flex justifyContent="space-between" gridGap={isDesktopWidth ? 8 : 4} flexDirection="column" maxWidth="42rem">
            <Flex maxWidth="52rem" pt={4} justify="space-between">
              <Heading as="h5" size="lg">
                Hi There! 👋
              </Heading>
            </Flex>{' '}
            <Text mt={4} textAlign="justify" fontSize={['sm', 'md']}>
              I&apos;m Farhan, currently studying at Multimedia Nusantara University majoring in computer science and now i am looking for an internship to continue my studies and practice my skills in the professional world. To practice my
              skills, I usually create a mini project and then push it on github.
            </Text>
            <Flex mb={4} bgColor={isDark ? 'white.100' : 'black.900'} p={[5, 20, 50]} borderRadius={3} as="blockquote" borderLeft="10px solid" borderLeftColor={isDark ? 'blue.400' : 'blue.400'}>
              <Icon as={GrBlockQuote} fontSize={40} mr={4} />
              <Flex flexDir="column">
                <Text fontSize="xl" fontStyle="italic">
                  We all need people who will give us feedback. That’s how we improve.
                </Text>
                <Text fontSize="xl" fontWeight="bold" mt={2}>
                  Bill Gates
                </Text>
              </Flex>
            </Flex>
            <Heading as="h3" size="lg">
              Current Favourite Tech Stack
            </Heading>
            <Flex gridGap={3} wrap="wrap">
              <IconButton aria-label="" icon={<SiReact />} onClick={() => window.open('https://reactjs.org/docs/getting-started.html')}></IconButton>
              <IconButton aria-label="" icon={<SiNextdotjs />} onClick={() => window.open('https://nextjs.org/docs')}></IconButton>
              <IconButton aria-label="" icon={<DiJavascript1 />} onClick={() => window.open('https://www.javascript.com/')}></IconButton>
              <IconButton aria-label="" icon={<SiTypescript />} onClick={() => window.open('https://www.typescriptlang.org/docs/')}></IconButton>
              <IconButton aria-label="" icon={<SiChakraui />} onClick={() => window.open('https://chakra-ui.com/')}></IconButton>
              <IconButton aria-label="" icon={<FaAndroid />} onClick={() => window.open('https://developer.android.com/docs')}></IconButton>
            </Flex>
          </Flex>
        </Stack>
      </MainAbout>
    </>
  );
};

export default Content;
