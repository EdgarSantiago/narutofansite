import { ParticlesContainer } from "@/components/global/Particles";
import Fonts from "@/lib/Fonts";
import "@/styles/globals.css";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
