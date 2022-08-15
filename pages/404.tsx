import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w="100vw"
      h="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text
        fontSize="18px"
        mt={3}
        mb={2}
        color={useColorModeValue("gray.900", "gray.50")}
      >
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you are looking for does not seem to exist
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        w="md"
        onClick={() => window.history.back()}
      >
        Go to Home
      </Button>
    </Flex>
  );
}
