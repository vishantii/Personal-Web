import Navbar from '../Components/Navbar';
import { MainAbout } from '../Components/Motion/MotionAbout';
import { Stack, Text, Heading, Flex, Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useDesktopWidthCheck } from '../Components/Checker';
import { Image } from '@chakra-ui/image';

const Content = () => {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  const isDesktopWidth = useDesktopWidthCheck();
  return (
    <>
      <Navbar />
      <MainAbout>
        <Flex justifyContent="space-between" gridGap={isDesktopWidth ? 8 : 4} align="center">
          <Stack spacing={isDesktopWidth ? 4 : 3}>
            <Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
              <Heading as="h5" size="lg">
                Hi There!
              </Heading>
              <Text textAlign="justify" fontSize={['sm', 'md']}>
                I&apos;m Farhan,currently studying at UMN and now i am looking for an internship to continue my studies and practice my skills in the professional world. To practice my skills, I usually create a mini project and then push
                it on github
              </Text>
            </Box>
          </Stack>
        </Flex>
      </MainAbout>
    </>
  );
};

export default Content;
