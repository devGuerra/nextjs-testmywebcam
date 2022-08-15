import type { AppProps } from "next/app";
import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Nav from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import SEO from "../components/SEO";
import Analytics from "../components/Analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="100vw" overflow="hidden">
        <Nav />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
