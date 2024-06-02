import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Page404: React.FC = () => {
  return (
    <Box textAlign="center" bg="white" h="100vh" py={10} px={6}>
      <Heading
        as="h2"
        display="inline-block"
        size="3xl"
        bgGradient="linear(to-r, purple.400, purple.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="20px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color="gray.500" mb={6}>
        お探しのページは存在いたしません。
      </Text>
      <Link to="/">
        <Button
          colorScheme="purple"
          bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
          color="white"
          variant="solid"
        >
          Go To Home
        </Button>
      </Link>
    </Box>
  );
};
