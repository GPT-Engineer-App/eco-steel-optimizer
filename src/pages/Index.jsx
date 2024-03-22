// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box p={8}>
        <VStack spacing={8}>
          <Heading>Welcome to my website!</Heading>
          <Button colorScheme="blue" leftIcon={<FaPlus />} mt={4}>
            Click me
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
