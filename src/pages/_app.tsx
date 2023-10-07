import Pointer from "@/components/global/pointer/Pointer";
import Fonts from "@/lib/Fonts";
import "@/styles/globals.css";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Pointer />
      <Fonts />
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
