import { useColorModeValue } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          backgroundColor: useColorModeValue("transparent", "transparent"),
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
