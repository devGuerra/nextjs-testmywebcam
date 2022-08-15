import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.50",
      },
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins",
  },
});
