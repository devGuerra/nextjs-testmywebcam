import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  {
    id: 0,
    title: "Teste sua webcam",
    text: "Teste inteligentemente sua webcam com este site",
  },
  {
    id: 1,
    title: "Teste seu microfone",
    text: "Teste seu microfone de forma inteligente com este site.",
  },
  {
    id: 2,
    title: "Teste sua câmera",
    text: "Teste sua câmera de forma inteligente com este site.",
  },
  {
    id: 3,
    title: "Teste seu alto-falante",
    text: "Teste inteligentemente seu alto-falante com este site",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4} mt={10}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>About Us</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          testewebcam.com.br é um serviço gratuito que permite testar seu Webcam
        </Text>
      </Stack>

      <Container maxW={"6xl"} py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} color={"gray.700"}>
                  {feature.title}
                </Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
