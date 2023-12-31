import Pointer from "@/components/global/pointer/Pointer";
import Fonts from "@/lib/Fonts";
import "@/styles/globals.css";
import "@/styles/paginate.css";
import { CSSReset, ChakraProvider, Show, theme } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;
  useEffect(() => {
    // Update the localStorage value with the new myValue
    localStorage.setItem("chakra-ui-color-mode", "light");
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Show above="lg">
        <Pointer />
      </Show>
      <Fonts />
      <NextNProgress color="orange" height={5} />
      <AnimatePresence initial={false} mode="wait">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
