import { ReactNode } from "react";
import Ahref from "next/link";
import { Box, Flex, Link, useColorMode, Container } from "@chakra-ui/react";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.700",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box px={4} bg={"gray.900"}>
      <Container maxW="6xl">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Ahref href="/">
            <Box color={"gray.50"} _hover={{ cursor: "pointer" }}>
              TestarWebcam.com.br
            </Box>
          </Ahref>
        </Flex>
      </Container>
    </Box>
  );
}
