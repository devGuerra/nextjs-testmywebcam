import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAssistant,
  FcCheckmark,
  FcDonate,
  FcInTransit,
  FcSupport,
  FcTwoSmartphones,
} from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text color={"gray.600"} fontWeight={600}>
        {title}
      </Text>
      <Text color={"gray.500"}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW="6xl" py={20}>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Teste sua webcam"}
            text={
              "Este site oferece um método simples para testar sua webcam com segurança. Não há necessidade de instalar nada."
            }
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={"Testes ilimitados"}
            text={"Você pode testar quantas vezes quiser. Sem limites."}
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={"Resposta instantânea"}
            text={
              "Sua webcam será testada assim que você clicar no botão. Sem espera."
            }
          />
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 3 }} mt={10} spacing={10}>
          <Feature
            icon={<Icon as={FcSupport} w={10} h={10} />}
            title={"Sem instalação"}
            text={
              "Esta ferramenta é baseada em seu navegador da web. Nenhuma instalação necessária."
            }
          />
          <Feature
            icon={<Icon as={FcCheckmark} w={10} h={10} />}
            title={"Seus dados estão seguros"}
            text={"Seus dados não são salvos ou compartilhados com ninguém."}
          />
          <Feature
            icon={<Icon as={FcTwoSmartphones} w={10} h={10} />}
            title={"Todos os dispositivos suportados"}
            text={
              "Você pode testar sua webcam em qualquer dispositivo. Celular, tablet, notebook, desktop."
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
