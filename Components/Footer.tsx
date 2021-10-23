import { Stack, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Stack as="footer" width="full" layerStyle="layoutBlock" spacing={6}>
      <Text textAlign="center" fontSize={['xs', 'sm']}>
        {new Date().getFullYear()} |{' '}
        <Link href="" target="_blank" rel="noopener noreferrer">
          Mohamad Farhan
        </Link>
      </Text>
    </Stack>
  );
};

export default Footer;
